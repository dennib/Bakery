# Bakery

*FrontEnd Boilerplate - A Webpack based FrontEnd Starter kit supporting ES6, SCSS and Handlebars*


### Installation
1. Clone the repo
```
git clone https://github.com/dennib/Bakery.git
```

2. Install npm packages
```
npm install
```
  
  
### Usage
Bakery takes advantage of ***Webpack*** to build html pages starting from ***Handlebars*** templates with support for ***SASS/SCSS*** and ***ES6*** transpiling and JS chunks injection.

It comes with a starting, basic, layout `main.hbs` (`views/layouts` folder) then used, through handlebars logic, by the various page templates you add. Two example templates comes by default in `views/templates` which then use the main layout. You can add as many layouts and templates as you want.

**NOTE:** Every page/template you add has to be declared in your webpack config file: `webpac.config.js`.

If you want to separate **`reusable parts of your code in their own component file`** you can to that by simply creating the respective `.hbs file` in `views/partials` folder and then use it in any of your handlebars templates through handlebars syntax.

####**Step by Step Guide**
**1.** Declare your page template in the `plugins section` of `webpac.config.js` like so:
```
plugins: [
    ...
    new HtmlWebPackPlugin({
      title: `Home | Bakery`,
      template: './src/views/templates/home.hbs',
      filename: './index.html',
      chunks: ['main']
    }),

    new HtmlWebPackPlugin({
      title: `About | Bakery`,
      template: './src/views/templates/about.hbs',
      filename: './about/index.html',
      chunks: ['main']
    }),
    ...
  ],
```
**`title`**: The title of the HTML page you  want to insert (see in the browser;
**`template`**: The path to the handlebars template to compile for current page;
**`filename`**: The filename of the compiled html page;
**`chunks`**: You can inject specific js chunks with the *`chunks`* property, an array of chuncks name (where a `chunk name is the name of the js file` you want to inject, note that you ***must*** specify an `entry point` for each separate chunk file you want).

**2.** Create your handlebars page template in `views/templates` using the desired layout:
```
{{#> main }}

    <h1>Example Page</h1>
    <p>I'm the content of a dummy page</p>

{{/main}}
```


**3.** Insert desired styles in `scss/main.scss` (a global stylesheet, scoped stylsheets coming soon).

**4.** Run one of the following commands.


#### Commands
- **`npm run build`**: Build the project in the *`dist`* folder, ready for *`production`*.
  
- **`npm run dev`**: Start *`webpack-dev-server`* at *`http://localhost:8080`* (with live-reload)
  
- **`npm run dev:open`**: Same as `npm run dev` but with browser opened automatically.