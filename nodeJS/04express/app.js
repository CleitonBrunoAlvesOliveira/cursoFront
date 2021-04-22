// importar express

var express = require('express');

// extrair funcoes proncipais do express

var app = express();

// identificar a pasta publico

app.use(express.static(__dirname + '/publico'));

// rotas

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html');

});

app.get('/sobre', function(req, res) {
   res.sendFile(__dirname + '/sobre.html')
});

// servidor 
app.listen(8082);