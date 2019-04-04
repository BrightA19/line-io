var express = require('express'),
    http = require('http');


var app = express();
var server = http.createServer(app);

app.use('/', express.static('client'));
app.use('/shared', express.static('shared'));

server.listen(process.env.PORT || 8000, function () {
    console.log('Server started. (' + __dirname + ')\n');
});
