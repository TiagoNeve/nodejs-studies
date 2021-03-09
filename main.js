var http = require('http');
var dateNow = require('./myfirstmodules');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html ; charset=utf-8',
    });
    res.write(`A hora atual é: ${dateNow.myDateTime()}`);
    res.end();
}).listen(5500);