// backend/routes/cadastro.js
const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  // Lógica para obter dados de cadastro
  res.send('Dados de cadastro');
});

// Exemplo de rota POST
router.post('/', (req, res) => {
  // Lógica para criar um novo registro de cadastro
  res.send('Novo cadastro criado');
});

module.exports = router;
