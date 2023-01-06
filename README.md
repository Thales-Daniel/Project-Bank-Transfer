# Boas vindas ao repositório Project-Bank-Transfer

Este Projeto tem como finalidade estruturar uma aplicação web fullstack, cujo objetivo seja possibilitar que usuários do banco consigam realizar transferências internas entre si

<br/><br/>

# Sumário

- [Instruções](#instruções)
- [Tecnologias](#tecnologias)
- [Executando o projeto](#executando-o-projeto)
- [Proximos passos](#proximos-passos)
- [Principal Desafio](#desafio-principal)

<br/><br/>

# Instruções:

Primeiro clone o repositorio para sua máquina local

```
git@github.com:Thales-Daniel/Project-Bank-Transfer.git
```

após isso entre na pasta do repositorio

```
cd Project-Bank-Transfer
```

Logo em seguida, execute o comando para instalar as dependencias:

```
yarn install:all
```

O proximo passo é rodar o comando abaixo para atualizar o banco de dados com a migraçao atual do prisma.

```
yarn run prisma
```

E para finalizar, inicie o projeto rodando o comando a baixo:

```
yarn start
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
  ![Login](https://user-images.githubusercontent.com/82240828/210466279-b899a709-dfd3-4145-8348-4f96d0b8b662.gif)
- Dashboard

  ![dashboard](https://user-images.githubusercontent.com/82240828/210466268-ba9cf420-ce37-4a08-ae5b-e30fb0cc03cf.gif)

- Register

  ![register and logof](https://user-images.githubusercontent.com/82240828/210466283-f979b52b-1ae1-4a22-8d9f-3af55f6e8a46.gif)

- Versão mobile

  ![Captura de tela de 2023-01-03 22-14-13](https://user-images.githubusercontent.com/82240828/210466766-2f5c7863-6643-4c76-94ff-a4cdc3eb76fe.png)

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
