const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    allowedHosts: 'all',
    host: '192.168.1.100',
    port :'4000',
  }
})
