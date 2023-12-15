# Vanilla Module Federation Base

> Micro-frontends com Module Federation

Este repositório serve como uma base para implementar a arquitetura de Module Federation em aplicações JavaScript puras, sem depender de frameworks específicos. É uma ótima maneira de começar a trabalhar com micro-frontends e entender como o Module Federation funciona em um ambiente simplificado.

## Sobre o Projeto

Module Federation é um recurso poderoso do Webpack que permite a uma aplicação JavaScript carregar dinamicamente módulos de outra aplicação em tempo de execução. Este projeto demonstra como configurar o Module Federation em um ambiente sem frameworks, facilitando a integração entre diferentes aplicações ou componentes de frontend.

## Estrutura do Projeto

O projeto consiste em três aplicações de exemplo:

- `AppActions`: Uma aplicação que expõe módulos com os botões.
- `AppList`: Uma aplicação que expõe módulos com a lista de contatos.
- `AppPerson`: Uma aplicação que expõe módulos com nome e sobrenome.
- `HostApp`: A aplicação hospedeira que consome os módulos de `AppActions`, `AppList` e `AppPerson`.

Cada aplicação possui sua própria configuração de Webpack e pode ser executada independentemente.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o NPM instalados em sua máquina. Essas ferramentas são necessárias para instalar as dependências e executar os projetos.

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