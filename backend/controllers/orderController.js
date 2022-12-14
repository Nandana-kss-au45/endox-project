const Order = require("../models/orderModels");
const Product = require("../models/productModels");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const Cart = require("../models/cartModel");

//Create new Order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  const userCart = await Cart.find({ user: req.user._id });

  if (!userCart) {
    return next(new ErrorHander("Cart not found", 404));
  }

  await Cart.deleteOne({ user: req.user._id });
 
  res.status(201).json({
    success: true,
    order,
  });
});

//Get Logged in user Orders (MY Orders)
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  const orderCount = await Order.find({ user: req.user._id }).count();

  if (!orders) {
    return next(new ErrorHander("My Order is Empty", 404));
  }

  res.status(200).json({
    success: true,
    orders,
    orderCount,
  });
});


//GET single Order --Admin
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate({
    path: "user",
    select: "name email -_id",
  });

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
    message: `get details`,
  });
});

//GET All Orders --Admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find().populate({
    path: "user",
    select: "name email -_id",
  });

  const ordersCount = await Order.find().count();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
    return totalAmount;
  });

  if (!orders) {
    return next(new ErrorHander("no rows found", 404));
  }

  res.status(200).json({
    success: true,
    orders,
    totalAmount,
    ordersCount,
  });
});

//GET pending Orders --Admin
exports.getPendingOrders = catchAsyncErrors(async (req, res, next) => {
 
  console.log(req.params.id);
  const orders = await Order.find().populate({
    path: "user",
    select: "name email -_id",
  });

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
    return totalAmount;
  });

  if (!orders) {
    return next(new ErrorHander("no rows found", 404));
  }
  const PendingOrders = orders.filter((order)=> order.orderStatus  === 'pending');

  res.status(200).json({
    success: true,
    orders:PendingOrders,
    totalAmount,
  });
});

//GET Shipped Orders --Admin
exports.getShippedOrders = catchAsyncErrors(async (req, res, next) => {
 
  console.log(req.params.id);
  const orders = await Order.find().populate({
    path: "user",
    select: "name email -_id",
  });

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
    return totalAmount;
  });

  if (!orders) {
    return next(new ErrorHander("no rows found", 404));
  }
  const ShippedOrders = orders.filter((order)=> order.orderStatus  === 'Shipped');

  res.status(200).json({
    success: true,
    orders:ShippedOrders,
    totalAmount,
  });
});

//GET Delivered Orders --Admin
exports.getDeliveredOrders = catchAsyncErrors(async (req, res, next) => {
 
  console.log(req.params.id);
  const orders = await Order.find().populate({
    path: "user",
    select: "name email -_id",
  });

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
    return totalAmount;
  });

  if (!orders) {
    return next(new ErrorHander("no rows found", 404));
  }

  const DeliveredOrders = orders.filter((order)=> order.orderStatus === 'Delivered');

  res.status(200).json({
    success: true,
    orders:DeliveredOrders,
    totalAmount,
  });
});



//GET Cancelled Orders --Admin
exports.getCancelledOrders = catchAsyncErrors(async (req, res, next) => {
 
  console.log(req.params.id);
  const orders = await Order.find().populate({
    path: "user",
    select: "name email -_id",
  });

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
    return totalAmount;
  });

  if (!orders) {
    return next(new ErrorHander("no rows found", 404));
  }
  const CancelledOrders = orders.filter((order)=> order.orderStatus  === 'Cancelled');

  res.status(200).json({
    success: true,
    orders:CancelledOrders,
    totalAmount,
  });
});

//Update Order status --Admin
exports.updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHander("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (order) => {
      await updateStock(order.product, order.quantity);
    });
  }

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliverdAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: `Order Status Updated as ${req.body.status}`,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

//Delete Order --Admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
    message: `Order is Deleted Successfully`,
  });
});
