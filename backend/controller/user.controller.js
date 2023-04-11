const UserService = require("../service/users.service")




const getUser =async(req,res)=>{
    try {
        const users = await UserService.getUser()
        res.json({msg:'ok',data:users})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}


const createUser =async(req,res)=>{
    try {
        const {user} = req.body;
        const newUser = await negocioService.createUser(user)
        res.json({msg:'ok',data:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}
const updateUser =async(req,res)=>{
    try {
        const {id}= req.params; 
        const {user}=req.body;

        const userUpdater = await negocioService.updateUser(user,id)
        res.json({msg:'ok',data:userUpdater})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}
const deleteUser =async(req,res)=>{
    try {
        const {id}= req.params; 

        const userDeleted = await negocioService.deleteUser(id)
        res.json({msg:'ok',data:userDeleted})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'ocurrio error en la llamada a la bd',data:null})
        
    }
}

module.exports={
    getUser,
    createUser,
    updateUser,
    deleteUser
}