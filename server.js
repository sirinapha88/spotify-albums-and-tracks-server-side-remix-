var express = require('express');
var app = express();
var prettyjson = require('prettyjson');
var request = require('request');
var spotifyRoutes = require("./controller/router");

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/assets/'));

app.use('/', spotifyRoutes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {console.log("Listening on localhost:", PORT)});