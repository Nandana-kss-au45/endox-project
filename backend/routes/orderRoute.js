const express = require("express");
const router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
  getPendingOrders,
  getFilterdOrders,
  getShippedOrders,
  getDeliveredOrders,
  getCancelledOrders,
} = require("../controllers/orderController");

const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

/*  ------------------------------------ Admin Routes ----------------------------------------   */
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, getAllOrders);
router
  .route("/admin/order/:id")
  .get(isAuthenticatedUser, authorizesdRoles("admin"), getSingleOrder);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizesdRoles("admin"), updateOrderStatus)
  .delete(isAuthenticatedUser, authorizesdRoles("admin"), deleteOrder);

  router
  .route("/admin/orders/pending")
  .get(isAuthenticatedUser, authorizesdRoles("admin"), getPendingOrders);
  
  router
  .route("/admin/orders/shipped")
  .get(isAuthenticatedUser, authorizesdRoles("admin"), getShippedOrders);
  
  router
  .route("/admin/orders/delivered")
  .get(isAuthenticatedUser, authorizesdRoles("admin"), getDeliveredOrders);
  router
  .route("/admin/orders/cancelled")
  .get(isAuthenticatedUser, authorizesdRoles("admin"), getCancelledOrders);
  // router
  // .route("/admin/orders/assignToUser")
  // .get(isAuthenticatedUser, authorizesdRoles("admin"), assignToUser);

module.exports = router;
