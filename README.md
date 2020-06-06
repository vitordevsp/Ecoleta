<div align='center'><img style='border-radius: 10px; ' src='web/src/assets/logo.svg' alt='logo'></div>

# :pushpin: índice

1. [Objetivo do Projeto](#dart-objetivo-do-projeto)
2. [Sobre](#page_with_curl-sobre)
3. [Tecnologias Utilizadas](#rocket-tecnologias-utilizadas)
4. [Requisitos](#gear-requisitos)
5. [Rodar o Projeto](#arrow_forward-rodar-o-projeto)
6. [Resultado](#keyboard-resultado)
7. [Redes Sociais](#man_technologist-redes-sociais)

---

## :dart: Objetivo do Projeto

:recycle: Aplicação para ajudar pessoas a encontrarem pontos de coleta para reciclagem de forma eficiente.

## :page_with_curl: Sobre

O projeto foi desenvolvido na semana NextLevelWeek#1 da [RocketSeat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg), com o [Diego Fernandes](https://github.com/diego3g) ministrando as aulas, esse evento sempre é bem intenso e traz muitos conhecimentos e dessa vez não foi diferente, o maior diferencial dessa edição foi trabalhar com TypeScript, foi meu primeiro contato com TS, de inicio é um pouco estranho, você esta acostumado com a flexibilidade do JS e ter uma certa cobrança por parte do TS é meio chato, mas ajuda muito, o código fica mais estruturado, definido e mais claro, gostei da experiencia e com certeza vou criar algo com TS, foi desenvolvido o back-end, front-end e mobile nesse projeto, vou descrever cada um separadamente.

**Back-end**

A estrutura do back-end foi feito usando o express, e o banco de dados utilizado foi o Sqlite3, assim como na [ultima semana omniStack](https://github.com/devsp011/be-the-hero) usamos a lib Knex para lidar com o banco de dados através do TS sem a necessidade de escrever queries SQL o maior diferencial nesse projeto foi trabalhar com o TypeScript como já foi citado a cima.

**Front-end**

O front-end foi criado usando um templete de TS `npx create-react-app web --typescript` , o projeto ficou com uma boa identidade visual e bonito seguindo os padrões de projetos da RocketSeat, além do TS no front uma das coisas mais legais de trabalhar nesse projeto foi uma lib de mapa que foi usada que é openSource leaflet, usamos a API de geolocalição do navegador para poder buscar a zona do usuário e também a [API do IBGE](https://servicodados.ibge.gov.br/api/docs) para buscar Estados e cidades, o que foi bem legal pois nem sabia que o IBGE tinha API, estou destacando mais o que foi novidade para mim, mas o projeto conta com mais coisas.

**Mobile**

:hammer_and_wrench:	**Em construção**

## :rocket: Tecnologias Utilizadas

### Back-end

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/)
* **Banco de dados:** [Sqlite3](https://www.sqlite.org/index.html)
* **Cliente REST:** [Insomnia](https://insomnia.rest/)

**Dependências**

* [cors](https://www.npmjs.com/package/cors)
* [express](https://expressjs.com/)
* [knex](http://knexjs.org/)
* [sqlite3](https://www.sqlite.org/index.html)

**Dependências de desenvolvimento**

* [@types/cors](https://www.npmjs.com/package/@types/cors)
* [@types/express](https://www.npmjs.com/package/@types/express)
* [ts-node](https://github.com/TypeStrong/ts-node)
* [ts-node-dev](https://github.com/whitecolor/ts-node-dev)
* [typescript](https://www.typescriptlang.org/)

### Front-end

* [React.js](https://pt-br.reactjs.org/)
* [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
* [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [TypeScript](https://www.typescriptlang.org/)

**Dependências**

* [axios](https://github.com/axios/axios)
* [react-icons](https://react-icons.github.io/react-icons/)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
* [leaflet](https://leafletjs.com/)
* [react-leaflet](https://react-leaflet.js.org/)

**API´S**

* [IBGE_UF](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
* [IBGE_CIDADES](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)

### Mobile

:hammer_and_wrench:	**Em construção**

**Dependências**

:hammer_and_wrench:	**Em construção**

## :gear: Requisitos

* [Git](https://git-scm.com/) (Para clonar, opcional)
* [Node.js](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/) (É instalado junto com o Node)

## :arrow_forward: Rodar o Projeto

* Primeiro passo, clone ou baixe o projeto em sua maquina
* Este repositório possui 3 projetos, server, web e mobile, você precisa iniciar os 3 individualmente. 

**server**

* Primeiro abra a pasta server no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidor com o comando `npm dev` 
* O servidor estará disponível na porta **3333**, http://localhost:3333/ 

**web**

* Agora abra a pasta web no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidor com o comando `npm start` 
* Uma aba vai se abrir no navegador, caso não ocorra, navegue para http://localhost:3000/ 

**mobile**

* Abra a pasta mobile no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidor com o comando `npm start` 
* Este projeto foi desenvolvido usando o Expo, então vc precisa instalar o [App do expo](https://play.google.com/store/apps/details?id=host.exp.exponent) no seu celular, e em seguida ler o QRCode que vai aparecer no seu navegador após iniciar o servidor usando o app do expo, após isso o app vai ser carregado no seu celular

## :keyboard: Resultado

:bookmark: **Layout do projeto no Figma:** [Click Aqui](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/)

## :man_technologist: Redes Sociais

* [Instagram](https://www.instagram.com/devsp011/)
* [Linkedin](https://www.linkedin.com/in/vitor-sampaio-4532451a7/)

---

<h5 align='center' >Feito com :purple_heart: por <a href="https://github.com/devsp011" target="_blank">DevSp</a> </h5>
