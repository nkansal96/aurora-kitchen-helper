/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./util/logger');
const bodyParser = require('body-parser');

const setup = require('./middlewares/frontendMiddleware');
const { resolve } = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const state = {
  data: {
    Appliance: {
    },
    Timers: {
      duration: null,
    },
    Audio: {
      song: null,
    },
  },
};

app.post('/updateData', (req, res) => {
  state.data = req.data;
  res.end();
});

app.get('/data', (req, res) => {
  res.json(state.data);
});

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
