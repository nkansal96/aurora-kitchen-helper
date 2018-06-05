/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./util/logger');

const setup = require('./middlewares/frontendMiddleware');
const { resolve } = require('path');

const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '3000';

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, host);
});
