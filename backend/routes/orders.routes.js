const { Router } = require("express");
const { getOrders, createOrder, updateOrder, deleteOrder } = require("../controller/orders.controller");



const ordersRouter = Router()


ordersRouter.get('/',getOrders)
ordersRouter.post('/',createOrder)
ordersRouter.put('/:id',updateOrder)
ordersRouter.delete('/:id',deleteOrder)

module.exports= ordersRouter