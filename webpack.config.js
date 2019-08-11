const path = require('path');
var glob = require('glob');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: './src/js/global.js',
    home: './src/views/templates/home/home.js',
    about: './src/views/templates/about/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'src', 'views'),
            path.join(__dirname, 'src', 'views', 'layouts'),
            path.join(__dirname, 'src', 'views', 'templates'),
            path.join(__dirname, 'src', 'views', 'partials')
          ].concat(
            glob.sync('**/', {
              cwd: path.resolve(__dirname, 'src', 'views', 'partials'),
              realpath: true
            })
          )
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          context: './static'
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './scss',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebPackPlugin({
      title: `Home | Bakery`,
      template: './src/views/templates/home/home.hbs',
      filename: './index.html',
      chunks: ['main', 'home']
    }),
    new HtmlWebPackPlugin({
      title: `About | Bakery`,
      template: './src/views/templates/about/about.hbs',
      filename: './about/index.html',
      chunks: ['main', 'about']
    }),
    new CopyPlugin([{ from: './src/static' }])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
