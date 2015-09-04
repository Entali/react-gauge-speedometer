var path = require('path');

function StatsPlugin() {
  this.assets = {};
}

StatsPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('emit', function(compiler, callback) {
    var webpackStatsJson = compiler.getStats().toJson();

    var assets = {};
    for (var chunk in webpackStatsJson.assetsByChunkName) {
      var chunkValue = webpackStatsJson.assetsByChunkName[chunk];
      if (!(chunkValue instanceof Array)) {
        chunkValue = [chunkValue];
      }
      chunkValue
          .filter(function(val) {
            return path.extname(val) !== '.map';
          })
          .forEach(function(val) {
            if (compiler.options.output.publicPath) {
              val = compiler.options.output.publicPath + val;
            }
            if (!assets[chunk + path.extname(val)]) {
              assets[chunk + path.extname(val)] = val;
            }
          });
    }

    self.assets = assets;

    var json = JSON.stringify(assets, null, 2);

    compiler.assets['_stats.json'] = {
      source: function() {
        return json;
      },
      size: function() {
        return json.length;
      }
    };

    callback();
  });
};

module.exports = StatsPlugin;
