// backend/routes/abastecimento.js
const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  // Lógica para obter dados de abastecimento
  res.send('Dados de abastecimento');
});

// Exemplo de rota POST
router.post('/', (req, res) => {
  // Lógica para criar um novo registro de abastecimento
  res.send('Novo abastecimento criado');
});

module.exports = router;
