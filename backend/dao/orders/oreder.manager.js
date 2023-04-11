const orderModel = require("../../model/order.mode");




class OrdersManager {

    getOrders=()=>orderModel.find()

    createOrder=(order)=>orderModel.create(order);

    updateOrder=(order,id)=>orderModel.findByIdAndUpdate(id,order);

    deleteOrder = (id)=>orderModel.findByIdAndRemove(id);

}

module.exports = new OrdersManager();