const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./router');

const app = express();

app.use(express.json({ type: 'application/vnd.api+json' })); //built-in body-parser

app.use('/api', router);

// error handler
//app.use(errorHandlers.sequelizeErrorHandler, errorHandlers.errorHandler);

module.exports = app;