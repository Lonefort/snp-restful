const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./api/models/snpModel'); //  created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/SNPdb'); 

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') res.send(200);
  else next();
};

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/snpRoutes'); //  importing route

routes(app); // register the route


app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`SNP RESTful API started on: ${port}`);

module.exports = app;
