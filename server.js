const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
const api = require('./routers/api.router');
const checkUserName = require('./middleware/check-username');
const apiLogger = require('./middleware/api-logger');
const errorHandler = require('./middleware/error-handeler');
const pokeRouter = require('./routers/poke.router');

// ========== Middleware ==========
app.use('/this-is-the-public-folder', express.static('public'));
app.use('/public-folder', express.static('public/images'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api', apiLogger);
app.use(checkUserName.checkUserName);

// ========== Routers ==========
app.use('/api', api);
app.use('/poke', pokeRouter);

// ========== Errors ==========
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${BASEURL}:${port}!`);
});
