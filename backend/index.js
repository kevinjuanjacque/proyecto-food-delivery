
const express = require("express")
const { PORT } = require("./config/env.config")
const userRouter = require("./routes/user.routes")
const productRouter = require("./routes/product.routes")
const negocioRouter = require("./routes/negocios.routes")


const app = express()


//MDW
app.use(express.json())


//ROUTE
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/negocio',negocioRouter)


app.listen(PORT,()=>{
    console.log("escuchando el puento",PORT)
})