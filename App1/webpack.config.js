const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './index.js', // Ponto de entrada da aplicação
  mode: 'development', // Define o modo para desenvolvimento (permite melhor debug)
  devServer: {
    port: 3001 // Porta em que o servidor irá rodar
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'App1',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './index.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html' // O template do HTML para usar
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Regex para identificar arquivos .css
        use: ['style-loader', 'css-loader'], // Loaders para processar CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Regex para identificar arquivos de imagens
        type: 'asset/resource',
      },
    ],
  },
};