#!/usr/bin/env node
   
var express = require('express');
var fs = require('fs');

var app = express(express.logger());

var buffer = new Buffer(fs.readFileSync('index.html', 'utf-8'), 'utf-8');
var allLines = buffer.toString('utf-8');

app.get('/', function(request, response) {
    response.send(allLines);	
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
