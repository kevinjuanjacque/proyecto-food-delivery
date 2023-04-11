const { default: mongoose } = require("mongoose");




const ordersCollection = "OrdersDelivery";


const ordersSchema = new mongoose.Schema({
    status:String,
    number:Number,
    totalPrice:Number,
    products:[],
    negocio:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Negocio"
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"userDelivery"
    }
})


const orderModel = mongoose.model(ordersCollection,ordersSchema);


module.exports=orderModel;