class NegociosManager {

    negocio = []
    getNegocios=()=>this.negocio
    
    getNegociosById=(id)=>this.negocio[id]

    createNegocio=(negocio)=>negocioModel.create(negocio);

    updateNegocio=(negocio,id)=>negocioModel.findByIdAndUpdate(id,negocio);

    deleteNegocio = (id)=>negocioModel.findByIdAndRemove(id);

}