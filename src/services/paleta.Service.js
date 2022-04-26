/* local de armazenamento dos dados que serão exibidos de acordo com a busca (todas as paletas/por Id)  */

const Paletas = require('../model/Paleta');

/*get all em conjunto com Mongoose DB*/
const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find();
    return allPaletas;
  }

/*get by id em conjunto com Mongoose DB*/
const findByIdPaletaService = async (idParam) => {
  const paleta = await Paletas.findById(idParam);
    return paleta;
};

/* create (PUSH)em conjunto com Mongoose DB*/
const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paletas.create(newPaleta)
  return createdPaleta;
};

/* Update (PUT)em conjunto com Mongoose DB*/
const updatePaletaService = async (idParam, editedPaleta) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, editedPaleta)
  return updatePaleta;
}

/* Delete em conjunto com Mongoose DB*/

const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam);
};

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
