# Boas vindas ao repositório Ng.cash!

Este Projeto tem como finalidade estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si

<br/><br/>

# Sumário

- [Instruções](#instruções)
- [Tecnologias](#tecnologias)
- [Executando o projeto](#executando-o-projeto)
- [Proximos passos](#proximos-passos)
- [Principal Desafio](#desafio-principal)

<br/><br/>

# Instruções:

Inicie clonando o repositorio para sua máquina local

```
git clone git@github.com:Thales-Daniel/ng-cash.git
```

entre na pasta do repositorio

```
cd ng-cash
```

Logo em seguida, entre na pasta do <strong>backend</strong> e execute o comando para o docker iniciar:

```
docker-compose up -d
```

É necessário rodar o camando abaixo para gerar ou atualizar o banco de dados

```
yarn prisma migrate dev
```

E

```
yarn prisma generate

```

E para finalizar, entre na pasta <strong>frontend</strong> e inicie o docker com o comando abaixo:

```
docker-compose up --build
```

# Tecnologias

O front-end do projeto foi desenvolvido em React.js com o gerenciador de estado Context-api, foram utilizadas as bibliotecas a baixo para auxiliar o desenvolvimento do projeto.

- `Axios`
- `eslint`
- `React-router-dom`
- `Styled-components`
- `Typescript`
- `React`

<div align="center">
  <img alt="typescript" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img alt="react" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  <img alt="eslint" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
  <img alt="axios" height="60" width="80" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg" />
  &nbsp
  <img alt="styled-components" height="60" width="70" src="https://www.styled-components.com/atom.png" />
  <br />
  <br />
</div>
  
  O back-end do projeto foi desenvolvido em Node.js com Express e Typescript. As tecnologias para desenvolver a API foram as seguintes:

- `Node.js`
- `Express`
- `Eslint`
- `Typescript`
- `Prisma`
- `Dotenv`

<div align="center">
  <img alt="Node" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img alt="express" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img alt="eslint" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
  <img alt="typescript" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img height="65" width="80" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png" />
  <br />
  <br />
</div>
<br/><br/>
<br/><br/>

# Executando o projeto

`Front-end`
<br/><br/>

- Login
  ![login](https://user-images.githubusercontent.com/82240828/203141697-71a896de-5aa2-4356-85b1-3ce5593764c5.gif)
- Dashboard

  ![dashboard](https://user-images.githubusercontent.com/82240828/203141674-274b75db-c594-43fd-988a-b9ad979afd89.gif)

- Register

  ![register](https://user-images.githubusercontent.com/82240828/203141691-c1c2bc66-203b-4b7f-813b-788d5ed1977c.gif)
  <br/><br/>
  `Back-end`

- Post Login

![login](https://user-images.githubusercontent.com/82240828/203143300-9d9f1ac7-d58e-410c-aa6d-ceafe59d8a16.png)

- Post Register

![register](https://user-images.githubusercontent.com/82240828/203143297-3743ba3f-c596-4fcf-895e-5b183b7cef16.png)

- Get All Transactions

![getTransaction](https://user-images.githubusercontent.com/82240828/203143303-e0346d74-682b-41e3-b6ea-30ad28f1af9d.png)

- Get Balance

![balance](https://user-images.githubusercontent.com/82240828/203143305-90eff99f-cc1a-4dfa-a374-3cf76f82d5fa.png)

- Post Transactions

![transaction](https://user-images.githubusercontent.com/82240828/203143293-b6b52f2a-5271-465d-ae86-217c260bbb07.png)

<br/><br/>

# Desafio Principal

O principal desafio do projeto foi organizar por onde seria iniciado a produção, alem disso, houveram problemas na hora da dockerização do back-end que me impediram de concluir 100% do projeto.

<br/><br/>

# Proximos passos

O proximo passo seria iniciar os testes do projeto, alem de criar novas
Freatures como por exemplo, uma função de depositar.
