const { default: mongoose } = require("mongoose");




const NegocioCollection = "Negocio";


const negocioSchema = new mongoose.Schema({
    name:String,
    products:[]
})


const negocioModel = mongoose.model(NegocioCollection,negocioSchema);


module.exports=negocioModel;