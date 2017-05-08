var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var apiRouter = require('./server/api/api.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(express.static('./public'));
// app.use(express.static('./browser'));
//
// app.get('/', function (req, res, next) {
//   res.sendFile(__dirname + '/browser/index.html');
// });

app.use('/api', apiRouter);

app.listen(1337, function () {
  console.log('listening on port 1337');
});
