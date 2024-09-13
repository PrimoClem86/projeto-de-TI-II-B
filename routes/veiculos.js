// backend/routes/veiculos.js
const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  // Lógica para obter dados de veículos
  res.send('Dados de veículos');
});

// Exemplo de rota POST
router.post('/', (req, res) => {
  // Lógica para criar um novo registro de veículo
  res.send('Novo veículo criado');
});

module.exports = router;
