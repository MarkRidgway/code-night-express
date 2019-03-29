module.exports = function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  if(!error) {
    res.status(404);
    res.render('error', { error: error });
  }

  res.status(500);
  res.send({ message: error.message });
}