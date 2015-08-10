'use strict';

var app = require('./app'),
    db = require('./dbInit');

// var path = require('path'),
//     fs = require('fs'),
//     http = require('http');

// var port = 3000;

// var server = app.listen(port, function(){
//     console.log("HTTP Server Listening on Port ", port);
// });

// module.exports = server;

module.exports = app;