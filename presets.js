const fs = require('fs');
const path = require('path');
const { normalizeText } = require('./utils/normalize');

// Check if the user has correctly specified a name
// for the new page template he wants
if (!process.argv[2]) {
  return console.log(
    `You must specify a page name like so:\n\nnpm run create pageName\n\n`
  );
}

const requestedPage = process.argv[2];
const requestedPath = path.join(
  __dirname,
  'src',
  'views',
  'templates',
  requestedPage
);

// Chcek if the folder for desired page already exists
if (fs.existsSync(requestedPath)) {
  return console.log('Page folder already exists!');
}

// Create necessary .hbs, .js and .scss files
fs.mkdirSync(path.join(requestedPath));
fs.writeFile(
  requestedPath + `/${requestedPage}.js`,
  `import './${requestedPage}.scss';`,
  () => {
    console.log(`Created file: ${requestedPage}.js`);
  }
);
fs.openSync(requestedPath + `/${requestedPage}.scss`, 'a');
console.log(`Created file: ${requestedPage}.scss`);
fs.writeFile(
  requestedPath + `/${requestedPage}.hbs`,
  `
    {{#> main }}

        <h1>${normalizeText(requestedPage)}</h1>

    {{/main}}
`,
  () => console.log(`Created file: ${requestedPage}.hbs`)
);
