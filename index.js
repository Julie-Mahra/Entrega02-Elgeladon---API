require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paleta.Route');
const connectToDatabase = require('./src/database/batabase');

const port = process.env.PORT || 4000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
