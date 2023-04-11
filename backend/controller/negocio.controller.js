


const getNegocio =async(req,res)=>{
    res.json({msg:'getNegocio'})
}


const createNegocio =async(req,res)=>{
    res.json({msg:'createNegocio'})
}
const updateNegocio =async(req,res)=>{
    res.json({msg:'updateNegocio'})
}
const deleteNegocio =async(req,res)=>{
    res.json({msg:'deleteNegocio'})
}

module.exports={
    getNegocio,
    createNegocio,
    updateNegocio,
    deleteNegocio
}