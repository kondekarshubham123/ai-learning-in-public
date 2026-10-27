# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The GitHub Actions workflow deploys the site to GitHub Pages whenever changes are pushed to `main`. To check the production build locally, run:

```bash
npm run deploy
```

This command only builds the site; it does not publish or push to `gh-pages`. To deploy, push the changes to `main` and monitor the **Build and Deploy** workflow in the repository's Actions tab. GitHub Pages must use **GitHub Actions** as its deployment source.
