const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './index.js',
  mode: 'development',
  devServer: {
    port: 3000
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        App1: 'App1@http://localhost:3001/remoteEntry.js',
        AppA: 'AppA@http://localhost:3002/remoteEntry.js',
        AppL: 'AppL@http://localhost:3003/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
};