var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Service started on port : ' + port);
});
