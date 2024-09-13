const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.post('/', (req, res) => {
    const { usuario, senha } = req.body;
    const query = 'SELECT * FROM login WHERE usuario = ? AND senha = ?';
    connection.query(query, [usuario, senha], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (results.length > 0) {
            res.json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }
    });
});

module.exports = router;
