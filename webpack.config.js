const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public/'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            //   presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: { localIdentName: '[path][local]___[hash:base64:5]' },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
  
    ],
    devServer: {
      contentBase: path.join(__dirname, './public/'),
    },
  };