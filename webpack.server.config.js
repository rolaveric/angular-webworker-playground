const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { server: './server.js' },
  // mode: 'development',
  resolve: { extensions: ['.js'] },
  target: 'node',
  externals: [
    // this makes sure we include node_modules and other 3rd party libraries
    /(node_modules|main\..*\.js)/
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
};
