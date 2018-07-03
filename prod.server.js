var express = require('express');
var config = require('./config/index');


var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/',function (req,res,next) {
  req.url = './index.html';
  next();
});


app.use(router);

var appData = require('../data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router()

app.use('/api',apiRoutes)




const devWebpackConfig = merge(baseWebpackConfig, {

    before(apiRoutes) {
      apiRoutes.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      });
      apiRoutes.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
      });
      apiRoutes.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      })
    }
  }


  app.use(express.static('./dist'))
  module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
      if (err) {
        reject(err)
      } else {
        // publish the new Port, necessary for e2e tests
        process.env.PORT = port
        // add port to devServer config
        devWebpackConfig.devServer.port = port

        // Add FriendlyErrorsPlugin
        devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        }))

        resolve(devWebpackConfig)
      }
    })
  })
