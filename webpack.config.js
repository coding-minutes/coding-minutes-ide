const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.tsx',
  mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: mode === 'production' ? 'bundle-[contenthash].js' : 'bundle.js',
    chunkFilename: mode === 'production' ? '[id]-[chunkhash].js' : '[id].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
        '~': __dirname + '/src'
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        include: MONACO_DIR,
        use: ['file-loader'],
      }, 
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ['cpp', 'python', 'java', 'go', 'javascript']
    }),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((acc, curr) => { acc[curr] = JSON.stringify(process.env[curr]); return acc }, {})
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};