var path = require('path');
var webpack = require('webpack');

var prod = process.env.NODE_ENV === 'production'

config = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: prod
        ? ['uglify',    'babel']
        : ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

if (!prod) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.entry.unshift(
    [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    ]);
}

module.exports = config;
