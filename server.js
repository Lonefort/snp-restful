var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

// app.listen(port);

mongoose = require('mongoose'),
  Order = require('./api/models/snpModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SNPdb'); 

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === "OPTIONS") 
      res.send(200);
  else 
      next();
}

app.use(allowCrossDomain)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/snpRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('SNP RESTful API started on: ' + port);

module.exports = app;
