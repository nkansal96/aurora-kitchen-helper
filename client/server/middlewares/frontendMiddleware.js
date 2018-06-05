const addProdMiddlewares = require('./addProdMiddlewares');
const webpackConfig = require('../../config/webpack.dev.babel');
const addDevMiddlewares = require('./addDevMiddlewares');

module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
