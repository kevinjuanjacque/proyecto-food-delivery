
const express = require("express")
const { PORT } = require("./config/env.config")
const userRouter = require("./routes/user.routes")

const negocioRouter = require("./routes/negocios.routes")
const { default: mongoose } = require("mongoose")
const ordersRouter = require("./routes/orders.routes")


const app = express()


//MDW
app.use(express.json())


//ROUTE
app.use('/api/user',userRouter)
app.use('/api/order',ordersRouter)
app.use('/api/negocio',negocioRouter)


app.listen(PORT,()=>{
    console.log("escuchando el puento",PORT)
    mongoose.connect('mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority')
})