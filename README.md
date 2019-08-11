# Bakery

*FrontEnd Boilerplate - A simple and lightweight FrontEnd Starter kit based on Webpack and Handlebars supporting ES6 and SCSS*.

## Features
Bakery takes advantage of ***Webpack*** to build html pages starting from ***Handlebars*** templates with support for ***SASS/SCSS***, ***ES6*** transpiling and JS chunks injection. 

**HIGHLIGHTS**
- **Handlebars** (with layouts and partials)
- **SASS/SCSS/CSS** support (with scoped styles)
- **Images/File** loader
- **ES6** to ES5 transpiling with Babel
- **HTML and CSS** minification
- **JS chunks** injected per page


### Installation
1. Clone the repo
```
git clone https://github.com/dennib/Bakery.git
```

2. Install npm packages
```
cd Bakery && npm install
```
  
  
### Usage


It comes with a starting, basic, layout `main.hbs` (`views/layouts` folder) then used, through handlebars logic, by the various page templates you add. Two example templates comes by default in `views/templates` which then use the main layout. You can add as many layouts and templates as you want.

**NOTE:** Every page/template you add has to be declared in your webpack config file: `webpack.config.js`.

If you want to separate **`reusable parts of your code in their own component file`** you can to that by simply creating the respective `.hbs file` in `views/partials` folder and then use it in any of your handlebars templates through handlebars syntax.

#### Step by Step Guide
**1.** Declare your `.js` entry points, one for every page, in `webpack.config.js` like so:
```
  entry: {
    main: './src/js/global.js',
    home: './src/views/templates/home/home.js',
    about: './src/views/templates/about/about.js'
  },
```
**2.** Declare your page template in the `plugins section` of `webpack.config.js` like so:
```
plugins: [
    ...
    new HtmlWebPackPlugin({
      title: `Home | Bakery`,
      template: './src/views/templates/home/home.hbs',
      filename: './index.html',
      chunks: ['main']
    }),

    new HtmlWebPackPlugin({
      title: `About | Bakery`,
      template: './src/views/templates/about/about.hbs',
      filename: './about/index.html',
      chunks: ['main']
    }),
    ...
  ],
```
**`title`**: The title of the HTML page you  want to insert (see in the browser;
**`template`**: The path to the handlebars template to compile for current page;
**`filename`**: The filename of the compiled html page;
**`chunks`**: You can inject specific js chunks with the *`chunks`* property, an array of chuncks name (where a `chunk name is the name of the js file` you want to inject.

**3.** Create your handlebars page template `folder` insert relative `.hbs`, `.js` and `.scss` files in `views/templates/` using the desired layout.
e.g. for catalogue page, create **`views/templates/catalogue/`** and inside of it the files `catalogue.hbs`,`catalogue.js` and `catalogue.scss`.

**catalogue.hbs**
```
{{#> main }}

    <h1>Catalogue Page</h1>
    <p>I'm the content of catalogue page</p>

{{/main}}
```

**catalogue.js**
```
import './catalogue.scss'
```

**4.** Insert global styles in `scss/main.scss` and scoped styles in the specific `.scss file`.

**5.** Run one of the following commands.


#### Commands
- **`npm run build`**: Build the project in the *`dist`* folder, ready for *`production`*.
  
- **`npm run dev`**: Start *`webpack-dev-server`* at *`http://localhost:8080`* (with live-reload)
  
- **`npm run dev:open`**: Same as `npm run dev` but with browser opened automatically.