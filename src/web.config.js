const path = require('path');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.js', // Update this path if your entry file is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};