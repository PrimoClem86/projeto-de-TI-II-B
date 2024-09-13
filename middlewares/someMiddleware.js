// backend/middlewares/someMiddleware.js
module.exports = function (req, res, next) {
  console.log('Middleware funcionando!');
  next(); // Passa para o próximo middleware ou rota
};
