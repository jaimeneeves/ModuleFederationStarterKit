const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './index.js', // Ponto de entrada da aplicação
  mode: 'development', // Define o modo para desenvolvimento (permite melhor debug)
  devServer: {
    port: 3002 // Porta em que o servidor irá rodar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' // O template do HTML para usar
    })
  ]
};