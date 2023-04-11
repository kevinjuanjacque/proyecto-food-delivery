const { default: mongoose } = require("mongoose");




const userCollection = "userDelivery";


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    rol:String,
    oreders:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"OrdersDelivery"
    }]
})


const userModel = mongoose.model(userCollection,userSchema);


module.exports=userModel;