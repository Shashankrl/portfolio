const fs = require('fs');
const path = require('path');

module.exports = {
  // Other config...
  resolve: {
    alias: {
      'index.wasm': fs.existsSync(path.resolve(__dirname, 'src/index.wasm'))
        ? path.resolve(__dirname, 'src/index.wasm')
        : path.resolve(__dirname, 'src/placeholder.wasm'), // Provide a fallback
    },
  },
};