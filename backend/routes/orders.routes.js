const { Router } = require("express");
const { getOrders, createOrder, updateOrder, deleteOrder, resolvedOrder } = require("../controller/orders.controller");



const ordersRouter = Router()


ordersRouter.get('/',getOrders)
ordersRouter.put('/:id',resolvedOrder)
ordersRouter.post('/',createOrder)
// ordersRouter.put('/:id',updateOrder)
ordersRouter.delete('/:id',deleteOrder)

module.exports= ordersRouter