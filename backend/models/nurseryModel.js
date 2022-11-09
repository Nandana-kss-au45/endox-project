const mongoose = require('mongoose');

const nurserySchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Nursery Name"],
        trim:true
    },
    address:{
        type:String,
        required:[true,"Please Enter Nursery Description"]
    },
    isActive:{
        type:Boolean,
        default: false
    },
    images:[
       {
        public_id :{
            type:String,
        },
        url:{
            type:String,
        }
       }
    ],
    
    isRemoved:{
        type:Boolean,
        default:false,
    }

})

module.exports = mongoose.model("Nursery",nurserySchema);