/*Rotas de acesso à todas as paletas, enviando para o Controller*/
const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.Controller');

const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

/*Rota para busca de todas as paletas*/
route.get('/all-paletas', controllerPaletas.findAllPaletasController);

/*Rota de busca de paletas pelo ID*/
route.get(
  '/one-paleta/:id',
  validId,
  controllerPaletas.findByIdPaletaController,
);

/*rotas para edição (criar),(atualizar,excluir //seguidos de id, porque será feito em um item de cada vez)*/
route.post(
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
route.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
route.delete(
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = route;
