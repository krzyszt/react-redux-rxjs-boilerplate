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
          ['@neutrinojs/airbnb-base', {
            eslint: Object.assign(eslint, {
              globals: [ 'window', 'document', 'jest']
            })
          }]
        ]
      }
    }
  }
}
