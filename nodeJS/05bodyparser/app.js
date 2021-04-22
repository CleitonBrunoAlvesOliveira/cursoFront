// importar modulos

var express = require('express');
// const { listenerCount } = require('node:events');

// importar bdyparser

// var bodyParser = require('body-parser');

// app

var app = express();

// configurar body-parser

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// rotas

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/formulario.html');
});


app.post('/receber', function (req, res) {
    res.write('o nome informado foi ' + req.body.nome);
    res.end();
});

// servidor

app.listen(8080);