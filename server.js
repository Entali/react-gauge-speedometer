var path = require('path');
var express = require('express');
var React = require('react');
var WebpackDevServer = require('webpack-dev-server');
var debug = require('debug');
var webpack = require('webpack');

var Html = require('./src/core/html');

const app = express();
const statsJsonPath = path.join(__dirname, 'build', '_stats.json');


function renderApp(res, assets) {
  const html = React.renderToStaticMarkup(<Html assets={assets}/>);
  res.send(`<!doctype html>\n${html}`);
}


const webpackServer = new WebpackDevServer(webpack(require('./webpack.config')), {
  publicPath: 'http://0.0.0.0:3001/build/',
  watchDelay: 0,
  hot: true,
  stats: {
    colors: true,
    assets: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false
  }
});


webpackServer.listen(3001, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    debug('webpack server listening on 3001');
  }
});


app.use('/build', express.static(path.join(__dirname, 'build')));


app.get('/', function(req, res) {
  const assets = JSON.parse(webpackServer.middleware.fileSystem.readFileSync(statsJsonPath));
  renderApp(res, assets);
});


app.use(function(err, req, res, next) {
  if (err) {
    console.log(err.stack);
    res.send('<html><body><pre>' + err.stack + '</pre></body></html>');
  }
});



app.listen(3000);
