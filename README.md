# Vanilla Module Federation Base

> Micro-frontends Com Module Federation

Este repositório serve como uma base para implementar a arquitetura de Module Federation em aplicações JavaScript puras, sem depender de frameworks específicos. É uma ótima maneira de começar a trabalhar com micro-frontends e entender como o Module Federation funciona em um ambiente simplificado.

## Sobre o Projeto

Module Federation é um recurso poderoso do Webpack que permite a uma aplicação JavaScript carregar dinamicamente módulos de outra aplicação em tempo de execução. Este projeto demonstra como configurar o Module Federation em um ambiente sem frameworks, facilitando a integração entre diferentes aplicações ou componentes de frontend.

## Instalação de Libs Básicas

```sh
npm init -y
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

## Configuração Básica do Arquivo webpack.config.js Sem Module Federation.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './index.js',
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

Explicação:

* `entry`: O ponto de entrada é o arquivo principal do seu aplicativo, geralmente o `index.js`.

* `mode`: Define o modo de compilação; para desenvolvimento, isso facilita a depuração.

* `devServer`: Configurações para o servidor de desenvolvimento do Webpack, definindo onde servir o conteúdo e em que porta.

* `plugins`: Neste caso, usamos o `HtmlWebpackPlugin` que simplifica a criação de arquivos HTML para servir os bundles do Webpack.

## Configuração Básica do Arquivo webpack.config.js Com Module Federation.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './index.js',
  mode: 'development',
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

# HostApp

Para configurar o `HostApp` que consumirá outros Apps, você precisará seguir algumas etapas para configurar o ambiente e, em seguida, utilizar o `ModuleFederationPlugin` para integrar os módulos expostos.

## Estrutura do Diretório para HostApp

```markdown
HostApp/
├── src/
│   ├── index.js
│   └── index.html
├── package.json
└── webpack.config.js
```

## Exemplo de Arquivos de Código para HostApp

`src/index.js`:

```js
// Aqui vamos consumir o módulo exposto pelo AppActions
import('AppA/Module').then(({AppActions}) => {
  AppActions(document.querySelector(`#content-actions`))
});
```

## `package.json` para HostApp:

```json
{
  "name": "hostapp",
  "version": "1.0.0",
  "description": "HostApp for Module Federation Example",
  "main": "src/index.js",
  "scripts": {
    "start": "webpack serve",
    "watch": "webpack --watch",
  },
  "devDependencies": {
    "html-webpack-plugin": "^5.3.1",
    "webpack": "^5.37.1",
    "webpack-cli": "^4.7.0",
    "webpack-dev-server": "^3.11.2",
    "webpack-merge": "^5.7.3"
  },
  "dependencies": {}
}
```

## `webpack.config.js` para HostApp:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  ...
  plugins: [
   ...
    new ModuleFederationPlugin({
      remotes: {
        AppA: 'AppA@http://localhost:3001/remoteEntry.js',
      },
      shared: require('./package.json').dependencies,
    }),
  ],
  devServer: {
    port: 3000,
  },
  ...
}
```

* No `ModuleFederationPlugin` da `HostApp`, estamos configurando um objeto remotes. Isso diz ao Webpack que existe um aplicativo remoto chamado `AppA` e onde encontrar seu arquivo remoteEntry.js.

* No `src/index.js`, estamos usando a função `import()` para carregar dinamicamente o módulo `AppActions` exposto pelo `AppA`. Quando o módulo estiver disponível, ele será executado e o elemento retornado pela função será adicionado ao body do documento.

## Instalação e Execução da HostApp

Assim como no `AppA`, você precisará instalar as dependências e iniciar o servidor de desenvolvimento.

```sh
npm install
npm start
```

Isso iniciará a `HostApp` na porta `3000`. Quando você abrir a HostApp no navegador, ela tentará carregar o módulo `AppActions` do `AppA`. Para que isso funcione, o `AppActions` também deve estar em execução (na porta 3001).