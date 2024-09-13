const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsing de JSON

// Importar rotas
const abastecimentoRoutes = require('./routes/abastecimento');
const cadastroRoutes = require('./routes/cadastro');
const chegadaRoutes = require('./routes/chegada');
const entregaRoutes = require('./routes/entrega');
const estatisticaRoutes = require('./routes/estatistica');
const veiculosRoutes = require('./routes/veiculos');

// Usar rotas
app.use('/abastecimento', abastecimentoRoutes);
app.use('/cadastro', cadastroRoutes);
app.use('/chegada', chegadaRoutes);
app.use('/entrega', entregaRoutes);
app.use('/estatistica', estatisticaRoutes);
app.use('/veiculos', veiculosRoutes);


const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
