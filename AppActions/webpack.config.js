const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './src/bootstrap.js', // Ponto de entrada da aplicação
  mode: 'development', // Define o modo para desenvolvimento (permite melhor debug)
  devServer: {
    port: 3002 // Porta em que o servidor irá rodar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' // O template do HTML para usar
    }),
    new ModuleFederationPlugin({
      name: 'AppA', // Nome do App
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/index.js',
      },
      // Optional: Compartilhar dependências do arquivo package.json
      shared: require('./package.json').dependencies,
    }),
  ],
  module: {
    
    rules: [

      // Aceitar Arquivos de Estilos
      {
        test: /\.css$/i, // Regex para identificar arquivos .css
        use: ['style-loader', 'css-loader'], // Loaders para processar CSS
      },

      // Aceitar Arquivos de Imagens
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Regex para identificar arquivos de imagens
        type: 'asset/resource',
      },
    ]
  }
};