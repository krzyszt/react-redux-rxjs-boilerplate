module.exports = {
  extends: 'airbnb/base',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'max-len': [1, 150]
  },
  parser: 'babel-eslint'
}
