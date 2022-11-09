const ErrorHander = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncErrors");
const  jwt = require("jsonwebtoken");
const  User = require("../models/userModel")

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;


  if(!token){
    return next(new ErrorHander("Please Login to Access this Resource",401));
  }

  const decodedData = jwt.verify(token,process.env.JWT_SECRET);
  //console.log(decodedData,"===decodedData");
  
  req.user = await User.findById(decodedData.id);

  next()




});

exports.authorizesdRoles = (...roles) =>{
    return (req,res,next)=> {
      console.log(req.user,"===========");
        if(!roles.includes(req.user.role)) {
          return next(new ErrorHander(`Role : ${req.user.role} is not allowed to access this resouce`,403))
        }
         
        next();
    }
}


