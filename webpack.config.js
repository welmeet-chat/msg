const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // ... other configurations ...
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
      },
    }),
  ],
};