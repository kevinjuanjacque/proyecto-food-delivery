const { Router } = require("express");
const { getProduct, createProduct, updateProduct, deleteProduct } = require("../controller/product.controller");



const productRouter = Router()


productRouter.get('/',getProduct)
productRouter.post('/',createProduct)
productRouter.put('/:id',updateProduct)
productRouter.delete('/:id',deleteProduct)

module.exports= productRouter