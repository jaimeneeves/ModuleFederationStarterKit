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

## Instalação

Para configurar o ambiente, siga os passos abaixo em cada subprojeto (`AppActions`, `AppList`, `AppPerson`, `HostApp`):

1. Clone o repositório:

```sh
git clone https://github.com/jaimeneeves/ModuleFederationStarterKit.git
```

2. Navegue até o diretório do subprojeto e instale as dependências:

```sh
cd VanillaModuleFederationBase/AppActions
npm install
```

Repita para `AppList`, `AppPerson` e `HostApp`.

## Executando os Projetos

Para iniciar qualquer uma das aplicações, use o comando:

```sh
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no navegador.

# Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues, enviar pull requests e propor melhorias.