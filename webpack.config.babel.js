const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: `cheap-module-eval-source-map`,
  entry: {
    app: './src/pres/browser-init/index.js',
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.join(__dirname, `src`),
        exclude: /node_modules/,
        use: {
            loader: `babel-loader`
        }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['static'])
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  }
};