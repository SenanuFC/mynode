var express = require('express');
var port = 3000;
var app = express();


app.use(function(req, res, next){
	console.log('Time:', Date.now());
	next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'.');
});
