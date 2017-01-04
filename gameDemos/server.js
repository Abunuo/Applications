var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/prd',
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true,
  proxy: {
    '/rest/*': {
      target: 'http://localhost:8080',
      secure: true,
      pathRewrite: {
        '^/rest': ''
      }
    }
  }
})
.listen(8000, 'localhost', function(err, result){
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8000');
})
