const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const app = express();
//init middleware global
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
//init db

//init routers
app.get('/', (req, res, next) => {
  const strCompress = 'Hello World';
  return res.status(500).json({
    message: 'Welcome Hello',
    metadata: strCompress.repeat(10000),
  });
});
//handling error

module.exports = app;
