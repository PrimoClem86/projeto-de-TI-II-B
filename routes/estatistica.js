// backend/routes/estatistica.js
const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  // Lógica para obter dados de estatística
  res.send('Dados de estatística');
});

module.exports = router;
