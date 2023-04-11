const negocioManager = require("../dao/negocio/negocio.manager")




const getNegocio =async(req,res)=>{
    try {
        const negocios = await negocioManager.getNegocios()
        res.json({msg:'ok',data:negocios})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}


const createNegocio =async(req,res)=>{
    try {
        const {negocio} = req.body
        const newNegocio = await negocioManager.createNegocio(negocio)
        res.json({msg:'ok',data:newNegocio})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}
const updateNegocio =async(req,res)=>{
    try {
        const {id} = req.params
        const {negocio} = req.body

        const updaterNegocio = await negocioManager.updateNegocio(negocio,id)
        res.json({msg:'ok',data:updaterNegocio})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}
const deleteNegocio =async(req,res)=>{
    try {
        const {id} = req.params;
        const negociodeleted = await negocioManager.deleteNegocio(id)
        res.json({msg:'ok',data:negociodeleted})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}

module.exports={
    getNegocio,
    createNegocio,
    updateNegocio,
    deleteNegocio
}