// backend/routes/chegada.js
const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  // Lógica para obter dados de chegada
  res.send('Dados de chegada');
});

// Exemplo de rota POST
router.post('/', (req, res) => {
  // Lógica para criar um novo registro de chegada
  res.send('Nova chegada criada');
});

module.exports = router;
