# @lab009/app-config

> Configuration for universal web application

## Install

```
npm install --save @lab009/app-config
```

## Repository

https://github.com/lab009/app-config.git

## Usage

Loads configuration files from a `config` folder in your project root.

- `default` is always loaded if it exists
- If you specify `NODE_ENV=production` then both `production` and `default` are loaded, with `production` taking precedence.
- Any valid JS extension can be used for config - JS, json, etc.
  - To load another extension, register it before you require this module

```js
import config from '@lab009/app-config'
```

For working in browser add AppConfigPlugin in webpack config.

```js
import AppConfigPlugin from '@lab009/app-config/webpack'

var webpackConfig = {
  plugins: [
    new AppConfigPlugin(),
  ]
}
```
