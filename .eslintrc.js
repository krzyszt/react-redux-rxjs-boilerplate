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
    'comma-dangle': ['error', 'never'],
    'max-len': [1, 150],
    'no-confusing-arrow': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  parser: 'babel-eslint'
}
