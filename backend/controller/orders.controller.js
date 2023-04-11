const orederManager = require("../dao/orders/oreder.manager")



const getOrders =async(req,res)=>{
    try {

        const orders = await orederManager.getOrders()
        res.json({msg:'ok',data:orders})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}


const createOrder =async(req,res)=>{
    try {

        const {order}=req.body;

        const newOrder = await orederManager.createOrder(order,)
        res.json({msg:'ok',data:newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }

}
const updateOrder =async(req,res)=>{
    try {
        const {id}= req.params; 
        const {order}=req.body;

        const orderUpdater = await orederManager.updateOrder(order,id)
        res.json({msg:'ok',data:orderUpdater})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}
const deleteOrder =async(req,res)=>{
    try {
        const {id}= req.params; 


        const orderDeleted = await orederManager.deleteOrder(id)
        res.json({msg:'ok',data:orderDeleted})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}

module.exports={
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}