var express = require('express');
var app = express();
var path = require('path');


// Define the port to run on
app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));

// Add some routing

app.get('/json', function(req, res) {
  console.log("GET the json");
  res
    .status(200)
    .json( {"jsonData" : true} );
});

app.get('/file', function(req, res) {
  console.log("GET the file");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
