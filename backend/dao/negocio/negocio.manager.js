const negocioModel = require("../../model/negocio.model");





class NegociosManager {

    getNegocios=()=>negocioModel.find()
    
    getNegociosById=(id)=>negocioModel.findById(id)

    createNegocio=(negocio)=>negocioModel.create(negocio);

    updateNegocio=(negocio,id)=>negocioModel.findByIdAndUpdate(id,negocio);

    deleteNegocio = (id)=>negocioModel.findByIdAndRemove(id);

}

module.exports = new NegociosManager();