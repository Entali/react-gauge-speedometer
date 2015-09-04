var os = require('os');
var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('./plugins/StatsPlugin');

var staticName = '[sha512:hash:base36:7].[ext]';


var config = {
  devtool: 'eval',
  entry: {
    app: [
      './src/app',
      'webpack-dev-server/client?http://' + os.hostname() + ':3001',
      'webpack/hot/dev-server'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[hash].js',
    publicPath: 'http://127.0.0.1:3001/build/'
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      utils: path.join(__dirname, 'src', 'utils')
    }
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!autoprefixer!stylus'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg|gif|png|ico)(\?.+)?$/,
        loader: 'file-loader?name=' + staticName
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader?experimental&optional=runtime', 'react-hot'],
        exclude: /node_modules/
      }
    ]
  },

  node: {},

  plugins: [
    new StatsPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};


module.exports = config;
