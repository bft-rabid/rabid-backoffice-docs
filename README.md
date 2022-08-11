# rabid-admin

[![Docusaurus](static/img/docusaurus.png)](https://docusaurus.io/)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation
[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://nodejs.org/en/download/) [![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)](https://classic.yarnpkg.com/en/docs/install)


### Local Development

```
$ npm run start
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
