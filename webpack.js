var webpack = require("webpack");
var config = require("app-config");

function AppConfigPlugin() {}
module.exports = AppConfigPlugin;

AppConfigPlugin.prototype.apply = function(compiler) {

  compiler.apply(new webpack.DefinePlugin({
    __CONFIG__: JSON.stringify(config)
  }));

  compiler.plugin("normal-module-factory", function(nmf) {
    nmf.plugin("before-resolve", function(result, callback) {
      if(!result) return callback();
      if(result.request === "app-config") {
        result.request = "app-config/lib/client";
      }
      return callback(null, result);
    });
  });
};
