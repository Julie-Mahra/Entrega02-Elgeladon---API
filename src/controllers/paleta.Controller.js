/*Controladores de busca (todas as paletas/por Id), que dá acesso ao Service  */
const mongoose = require('mongoose');
const paletasService = require('../services/paleta.Service');

/*Busca lista completa de paletas disponíveis (retornando objetos em json) */
const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();
  if (allPaletas.length == 0) {
    return res.status(404).send({ message: 'Não existe paleta cadastrada!' });
  }
  res.send(allPaletas);
};

/*Busca paletas pelo id de acordo com a pesquisa por parâmetro (retornando objetos em json)*/
const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);
  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }
  res.send(chosenPaleta);
};

/*criação de um novo item em conjunto com Mongo DB*/
const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

/*atualização dos itens, uma a um*/
const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const editPaleta = req.body;
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};

/*exclusão de itens um a um (respostas em chave"key{}"/retorna msg em formato json)*/
const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
