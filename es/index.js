'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require, import/no-dynamic-require */

var env = process.env.NODE_ENV;

var envConfigPath = void 0;
var defaultConfig = void 0;
var envConfig = {};
var cfgDir = process.env.CONFIG_DIR;

// figure out where the config files are at
if (!cfgDir) {
  cfgDir = _path2.default.resolve(process.cwd(), 'config/') + '/';
} else {
  cfgDir = _path2.default.resolve(cfgDir) + '/';
}

var defaultConfigPath = _path2.default.join(cfgDir, 'default');
if (env) {
  envConfigPath = _path2.default.join(cfgDir, env);
}

try {
  defaultConfig = require(defaultConfigPath);
} catch (err) {
  defaultConfig = {}; // no default specified
}

try {
  if (envConfigPath) {
    envConfig = require(envConfigPath);
  }
} catch (err) {
  throw new Error(err);
}

exports.default = (0, _lodash2.default)(defaultConfig, envConfig);