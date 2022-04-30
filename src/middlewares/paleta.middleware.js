const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Dados Inválidos!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const paleta = req.body;
  if (!paleta || !paleta.foto || !paleta.preco) {
    return res.status(400).send({
      message: 'Faltam dados para a incluir nova paleta ao cardápio!',
    });
  }
  next();
};

const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.boby;

  carrinho.forEach((item) => {
    if (!item || !item.paletaId || !item.quantidade) {
      return res
        .status(400)
        .send({ message: 'Envie todos os campos das paletas' });
    }
  });
};
module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
};
