var express = require('express');
var port = 3000;
var app = express();
var soap = require('soap');
var xml2js = require('xml2js');
// var prompt = require('prompt');
// var parser = require('xml2js').parseString;


//EXAMPLE
var args1 = {"CityName": "Accra", "CountryName":"Ghana"};
var url1 = "http://www.webservicex.com/globalweather.asmx?wsdl";
//XML Parser
var parser = new xml2js.Parser();
soap.createClient(url1, function(err, client) {
      client.GetWeather(args1, function(err, result) {
      	parser.parseString(result.GetWeatherResult, function(err, result){
      		var json = JSON.stringify(result);
      		console.log(json);
      	})
      });
});


//AAA SOAP CALLS
//


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
