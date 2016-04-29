var express = require('express');
var app = express();
var prettyjson = require('prettyjson');
var request = require('request');
var spotifyRoutes = require("./controller/router");

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/assets/'));

app.use('/', spotifyRoutes);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});