const { Router } = require("express");
const { getNegocio, createNegocio, updateNegocio, deleteNegocio } = require("../controller/negocio.controller");



const negocioRouter = Router()

negocioRouter.get('/',getNegocio)
negocioRouter.post('/',createNegocio)
negocioRouter.put('/',updateNegocio)
negocioRouter.delete('/',deleteNegocio)


module.exports= negocioRouter