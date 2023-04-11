const userModel = require("../../model/user.model");



class UserManager {

    getUser=()=>userModel.find()

    createUser=(user)=>userModel.create(user);

    updateUser=(user,id)=>userModel.findByIdAndUpdate(id,user);

    deleteUser = (id)=>userModel.findByIdAndRemove(id);

}

module.exports = new UserManager();