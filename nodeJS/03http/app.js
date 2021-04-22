// modulo http

var http = require('http');

// configurar modulo http

http.createServer(function(req, res){
    res.write('hello world, aprendendo node... massa');
    res.end();
}).listen(8082);