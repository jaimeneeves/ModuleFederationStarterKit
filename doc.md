## Instalação de Libs Básicas

```sh
npm init -y
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

## Configuração Básica do `webpack.config.js` sem Module Federation.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/bootstrap.js',
  mode: 'development',
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
```

Explicação:

* `entry`: O ponto de entrada é o arquivo principal do seu aplicativo, geralmente o `index.js`.

* `mode`: Define o modo de compilação; para desenvolvimento, isso facilita a depuração.

* `devServer`: Configurações para o servidor de desenvolvimento do Webpack, definindo onde servir o conteúdo e em que porta.

* `plugins`: Neste caso, usamos o `HtmlWebpackPlugin` que simplifica a criação de arquivos HTML para servir os bundles do Webpack.

## Configuração Básica do `webpack.config.js` com Module Federation.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // O template do HTML para ser usado
    }),
    new ModuleFederationPlugin({
      name: 'App1',
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

* `ModuleFederationPlugin`: Configura este projeto para expor partes de si mesmo como módulos federados.

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

## Aceitar Imagens

```js
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i, // Regex para identificar arquivos de imagens
      type: 'asset/resource',
    },
  ],
},
```

```js
import Icon from './icon.png';
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

## Aceitar Arquivos HTML

Caso você queira adicionar arquivos HTML ao seu projeto, é preciso fazer os seguintes passos:

```sh
$ npm install --save-dev html-loader
```

### Para Usar

```js
// file.js

import html from "./file.html";
```

```js
// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
```