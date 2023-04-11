


const getUser =async(req,res)=>{
    res.json({msg:'getuser'})
}


const createUser =async(req,res)=>{
    res.json({msg:'createUser'})
}
const updateUser =async(req,res)=>{
    res.json({msg:'updateUser'})
}
const deleteUser =async(req,res)=>{
    res.json({msg:'deleteUser'})
}

module.exports={
    getUser,
    createUser,
    updateUser,
    deleteUser
}