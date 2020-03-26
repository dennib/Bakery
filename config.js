const config = {}

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