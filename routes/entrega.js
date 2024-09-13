// backend/routes/entrega.js
const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  // Lógica para obter dados de entrega
  res.send('Dados de entrega');
});

// Exemplo de rota POST
router.post('/', (req, res) => {
  // Lógica para criar um novo registro de entrega
  res.send('Nova entrega criada');
});

module.exports = router;
