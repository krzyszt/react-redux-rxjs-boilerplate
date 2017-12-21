const eslint = require('./.eslintrc');

module.exports = {
  use: [
    '@neutrinojs/react',
    '@neutrinojs/jest'
  ],
  env: {
    NODE_ENV: {
      development: {
        use: [
        ]
      }
    }
  }
}
