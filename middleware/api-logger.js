module.exports = function(req, res, next) {
  console.log('something is happening here', req.originalUrl);
  next();
}
