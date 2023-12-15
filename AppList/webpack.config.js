const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/bootstrap.js',
  mode: 'development',
  devServer: {
    port: 3003
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'AppL',
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Aceitar Arquivos de Imagens
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};