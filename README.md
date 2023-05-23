
<p align="center">
  Aplicação em NextJS/TypeScript - Dashboar de usuários 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/chakra"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/chakra/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/chakra">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/chakra">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Aplicação em NextJS/TypeScript de um dashboard de usuários onde é possível cadastrá-los, visualizá-los e ver gráficos.


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [chakra](https://chakra-ui.com/)
- [miragejs](https://miragejs.com/)
- [react-query](https://www.npmjs.com/package/react-query)
- [zzzzzz](xxxxxxxxxx)]
- [zzzzzz](xxxxxxxxxx)



## Estrutura ##
```
.
├── next.config.js
├── next-env.d.ts
├── package.json
├── src
│   ├── components
│   │   ├── ActiveLink.tsx
│   │   ├── Form
│   │   │   └── Input.tsx
│   │   ├── Header
│   │   │   ├── header.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── NotificationsNav.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── SearchBox.tsx
│   │   ├── Pagination
│   │   │   ├── index.tsx
│   │   │   └── PaginationItem.tsx
│   │   └── Sidebar
│   │       ├── index.tsx
│   │       ├── NavLink.tsx
│   │       ├── NavSection.tsx
│   │       └── SidebarNav.tsx
│   ├── contexts
│   │   └── SidebarDrawerContext.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── dashboard.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── users
│   │       ├── create.tsx
│   │       └── index.tsx
│   ├── services
│   │   ├── api.ts
│   │   ├── hooks
│   │   │   └── useUsers.ts
│   │   ├── mirage
│   │   │   └── index.ts
│   │   └── queryClient.ts
│   └── styles
│       └── theme.ts
├── tsconfig.json
└── yarn.lock

```

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/chakra

# Access
$ cd chakra

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
