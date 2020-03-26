![Bakery Logo](https://i.imgur.com/ElIPCyF.jpg)

# Bakery

*FrontEnd Boilerplate - A simple and lightweight FrontEnd Starter kit based on Webpack and Handlebars supporting ES6 and SCSS*.

## Features
Bakery takes advantage of ***Webpack*** to build html pages (static websites) from ***Handlebars*** templates with support for ***SASS/SCSS*** and ***ES6***.

**HIGHLIGHTS**
- **Handlebars** (with layouts and partials)
- **SASS/SCSS/CSS** support (with scoped styles)
- **Images/File** loader
- **ES6** to ES5 transpiling with Babel
- **HTML and CSS** minification
- **Easy and fast** setup and workflow

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
    - [Description](#description)
    - [Guide](#guide)
    - [Commands](#commands)
    - [Configuration](#configuration)
        - [HTML Minification options](#html-minification-options)
- [References](#notes)
---

## Installation
1. Clone the repo
```bash
git clone https://github.com/dennib/Bakery.git
```

2. Install npm packages
```bash
cd Bakery && npm install
```
  
  
## Usage
### Description
It injects every page template (found in `src/views/templates`) in the desired layout, `main.hbs` by default (found in `src/views/layouts`). You can add as many layouts and templates as you want.

If you want, you can separate **`reusable parts of your code in their own component file`** by simply creating the respective `.hbs file` in `src/views/partials` and then call them in any of your handlebars templates.

[See more of Handlebars syntax](#references)

### Guide
#### 1. Add a page (template)
Every page you want to add needs a folder in `src/views/templates`, and respective `.js`, `.hbs` and `.scss` files inside of it with same name. You can create them by and or simply typing:

```bash
npm run create name-of-the-page
```

This will create the directory `src/views/templates/name-of-the-page` with 3 files inside of it:

- **`name-of-the.page.scss`**: a blank and ready to go scss stylesheet for current page.

- **`name-of-the-page.js`**: needed as entry point for webpack, by default it only loads respective stylesheet, you can add any javascript code for current page. (Note that every page will receive this chuck and the global one `src/js/global.js`)

- **`name-of-the-page.hbs `**: the template itself, by default injected in `main.hbs` layout. You can add HTML or Handlebars code as well as use `.hbs partials`.

#### 2. Start working on your newly created page
- Insert `HTML/Handlebars` code in your `name-of-the.page.hbs` file
- Insert `css/scss code` specific to this page in `name-of-the.page.scss`
- Insert global `css/scss` code in `src/scss/main.scss`
- Create and/or import handlebars `partials` from `srd/views/partials`

#### 3. Start the Dev Server or build for production
(see commands below)


#### Commands
- **`npm run create name-of-the-page`**: Lets you add a new page template. Creates required files as described in [Guide](#guide).
Change `name-of-the-page` with the your new page desired name.
  
- **`npm run build`**: Build the project in the *`dist`* folder, ready for *`production`*.
  
- **`npm run dev`**: Start *`webpack-dev-server`* at *`http://localhost:8080`* (with live-reload)
  
- **`npm run dev:open`**: Same as `npm run dev` but with browser opened automatically.


#### Configuration
##### HTML Minification options

In `config.js` you can find a `config.htmlMinifyOptions` configuation object with the default HTML minification config included in Bakery:
```javascript
// HTML Minimizer options
// Set the values you want or add other settings
// among the ones available from 
// https://github.com/kangax/html-minifier#options-quick-reference
config.htmlMinifyOptions = {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: false,
    conservativeCollapse: false,
    preserveLineBreaks: true,
    removeAttributeQuotes: false,
    removeComments: false,
    useShortDoctype: false,
    html5: true,
}

module.exports = config
```
**Note:** you can add other minification options, find all available ones at [HTML Minifier documentation page](https://github.com/kangax/html-minifier#options-quick-reference).


## References
 - [Handlebars documentation](https://handlebarsjs.com/)
 - [Hanldebars loader for webpack](https://github.com/pcardune/handlebars-loader)