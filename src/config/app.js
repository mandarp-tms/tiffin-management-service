const express = require('express');
const cors = require('./cors');       // your cors config
const morgan = require('morgan');
const routes = require('../routes/index');
const { errorHandler } = require('../middleware/error.middleware');
const { notFound } = require('../middleware/notFound.middleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors);

// All routes
app.use('/api/v1', routes);

// 404 + Error handlers (always last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;