/*Rotas de acesso à todas as paletas, enviando para o Controller*/
const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.Controller');
const controllerCarinho = require('../controllers/carrinho.controller')


const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho
} = require('../middlewares/paleta.middleware');

/*Rotas para swagger
Router.use('/api-docs', swaggerUi.serve);
Router.use('/api-docs', swaggerUi.setup(swaggerDocument));
*/
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

/*Rotas para o carrinho*/

route.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);
route.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  controllerCarinho.createManyItemsCarrinhoController,
);
route.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = route;
