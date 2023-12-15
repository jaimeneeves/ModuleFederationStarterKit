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