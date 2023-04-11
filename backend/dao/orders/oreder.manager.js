const orderModel = require("../../model/order.mode");




class OrdersManager {

    getOrders=()=>orderModel.find()

    resolvedOrder=(id,resolved) => orderModel.findByIdAndUpdate(id,{status:resolved})

    createOrder=(order)=>orderModel.create(order);

    updateOrder=(order,id)=>orderModel.findByIdAndUpdate(id,order);

    deleteOrder = (id)=>orderModel.findByIdAndRemove(id);

}

module.exports = new OrdersManager();