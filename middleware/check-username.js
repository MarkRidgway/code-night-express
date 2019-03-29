const faker = require('faker');

module.exports = {
  checkUserName(req, res, next) {
    if(!req.body.userName) {
      req.body.userName = faker.internet.userName();
      next();
    }
  }
};
