const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paleta.Route');
const port = 3000;
const app = express();
const connectToDatabase = require('./src/database/batabase');

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
