import test from 'ava'
import path from 'path'

test.beforeEach(() => {
  process.env.NODE_ENV = ''
  const resolved = require.resolve('../src')
  delete require.cache[resolved]
})

test('should return empty when no config resolved', t => {
  process.env.CONFIG_DIR = path.join(__dirname, 'doesnt-exist')
  const config = require('../src')

  t.truthy(config)
  t.deepEqual(config, {})
})

test('should work with provided config dir', t => {
  process.env.CONFIG_DIR = path.join(__dirname, 'config')
  const config = require('../src')

  t.truthy(config)
})

test('should load default when no env provided', t => {
  process.env.CONFIG_DIR = path.join(__dirname, 'config')
  const config = require('../src')

  t.truthy(config)
  t.deepEqual(config, {
    a: 3,
    b: 2,
    c: 1
  })
})

test('should load env when provided', t => {
  process.env.CONFIG_DIR = path.join(__dirname, 'config')
  process.env.NODE_ENV = 'production'
  const config = require('../src')

  t.truthy(config)
  t.deepEqual(config, {
    a: 1,
    b: 2,
    c: 3
  })
})

test('should load env when provided', t => {
  process.env.CONFIG_DIR = path.join(__dirname, 'config')
  process.env.NODE_ENV = 'error'

  t.throws(() => {
    require('../src')
  }, /SyntaxError: /)
})
