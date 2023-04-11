const { Router } = require("express");
const { getUser, createUser, updateUser, deleteUser } = require("../controller/user.controller");



const userRouter = Router()


userRouter.get('/',getUser)
userRouter.post('/',createUser)
userRouter.put('/:id',updateUser)
userRouter.delete('/:id',deleteUser)


module.exports= userRouter