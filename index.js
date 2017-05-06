var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var apiRouter = require('./server/api/api.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', function (req, res, next) {
  res.json('hello world');
});

app.use('/api', apiRouter);

app.listen(3000, function () {
  console.log('listening on port 3000');
});
