const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};