const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Nursery = require('../models/nurseryModel')


exports.createNursery = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const nursery = await Nursery.create(req.body);
})