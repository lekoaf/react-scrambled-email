const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Build the entire example + library for hosting
 * locally with the webpack dev server.
 */
module.exports = {
  entry: './examples/index',
  mode: 'development',
  resolve: {
    alias: {
      'react-scrambled-email$': path.resolve(__dirname, 'dist/esm'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-react',
              [
                '@babel/env',
                {
                  debug: false,
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                    proposals: true,
                  },
                },
              ],
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/template.html',
    }),
  ],
}
