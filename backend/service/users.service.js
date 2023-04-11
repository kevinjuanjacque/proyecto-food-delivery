const userManager = require("../dao/user/user.manager");



class UserService {
    
    getUser=()=>userManager.getUser()

    createUser=(user)=>serManager.createUser(user)

    updateUser=(user,id)=>userManager.updateUser(user,id)

    deleteUser = (id)=>userManager.deleteUser(id)

}


module.exports = new UserService();