const express = require('express');
const cors = require('cors');
const expressValidator = require('express-validator');
const app = express();
const imc_utils = require('./utils/imc');


app.use(express.json());
app.use(expressValidator());
app.use(cors());


app.get('/imc', (req, res) => {
  let edad = req.query.edad;
  let peso = req.query.peso;
  let estatura = req.query.estatura;
  let sexo = req.query.sexo;

  if( peso == 0 || estatura == 0){
    res.status(400).send("Peso o estatura no pueden ser 0");
  }

  let respuesta = imc_utils.obtenIMC(edad, peso, estatura, sexo);

  res.send(respuesta);



})








const port = process.env.PORT || 5000;
app.listen(port);

console.log(`imc-api listening on ${port}`);
