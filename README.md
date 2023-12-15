# Microfrontend Com Module Federation

Module Federation é um recurso avançado oferecido pelo Webpack que permite a um aplicativo JavaScript carregar código dinamicamente de outro aplicativo em tempo de execução. Isso pode ser incrivelmente útil para micro-frontends, onde diferentes equipes podem trabalhar em diferentes partes de um aplicativo e implantá-las independentemente.

# Instalação de Libs Básicas

```sh
npm init -y
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

# Configuração Básica do Arquivo webpack.config.js Sem Module Federation.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './index.js', // Ponto de entrada da aplicação
  mode: 'development', // Define o modo para desenvolvimento (permite melhor debug)
  devServer: {
    port: 3000 // Porta em que o servidor irá rodar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' // O template do HTML para ser usado
    })
  ]
};
```

# Configuração Básica do Arquivo webpack.config.js Com Module Federation.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './index.js', // Ponto de entrada da aplicação
  mode: 'development', // Define o modo para desenvolvimento (permite melhor debug)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000, // Porta em que o servidor irá rodar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // O template do HTML para ser usado
    }),
    new ModuleFederationPlugin({
      name: 'App1', // Nome do App
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './index.js',
      },
      // Optional: Compartilhar dependências do arquivo package.json
      shared: require('./package.json').dependencies,
    }),
  ]
};
```

## Aceitar Arquivos CSS

```sh
$ npm install --save-dev style-loader css-loader
```

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
```

## Exportando o App com Module Federation

`ModuleFederationPlugin`: Configura este projeto para expor partes de si mesmo como módulos federados.

```js
plugins: [
  new ModuleFederationPlugin({
    name: 'AppActions', // Nome do App
    filename: 'remoteEntry.js',
    exposes: {
      './Module': './index.js', // Arquivo que será exportado
    },
    // Optional: Compartilhar dependências do arquivo package.json
    shared: require('./package.json').dependencies,
  }),
],
```