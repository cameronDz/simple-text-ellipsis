const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: path.resolve(__dirname, '../', 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  }
};
