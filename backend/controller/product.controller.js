


const getProduct =async(req,res)=>{
    res.json({msg:'getProduct'})
}


const createProduct =async(req,res)=>{
    res.json({msg:'createProduct'})
}
const updateProduct =async(req,res)=>{
    res.json({msg:'updateProduct'})
}
const deleteProduct =async(req,res)=>{
    res.json({msg:'deleteProduct'})
}

module.exports={
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}