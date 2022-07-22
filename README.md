<h1><a href="https://furye.ru"><strong>Personal site on GitHub Pages</strong></a> 🕚⚡️🎈🐀</h1>

<em>Eleventy · Tailwind CSS · HTML · CSS · Javascript</em>

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Contents 	

- [Project overview](#project-overview)
- [Getting started](#getting-started)
	- [Install dependencies](#install-dependencies)
	- [Working locally](#working-locally)
	- [Creating a production build](#creating-a-production-build)
- [Deployment](#deployment)
- [Credits](#credits)

---

## Project Overview 

- The project uses [Eleventy](https://11ty.dev) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed)
- PostCSS set up to handle:
	- TailwindCSS
	- CSS Imports
	- Autoprefixer 
- HTML minified in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally
Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build
Minify HTML, minify JS, inline and minify CSS.

``` 
npm run build
```

---

## Deployment 👀

Seach the deployment method to GH pages 

---

## Comment to  files
- package.json — 
- postcss.config.js
- twailwind.config.js — if you need custom classes in stylesheets. See the [Twialwind Documentation](https://tailwindcss.com/docs/configuration)

### Credits 

- [Eleventy](https://11ty.dev)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
	- Autoprefixer
	- PostCSS Import
- [esbuild](https://esbuild.github.io/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)

### Thanks