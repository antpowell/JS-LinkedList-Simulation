var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
})
var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname));

app.listen(port);