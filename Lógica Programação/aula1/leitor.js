const terminal = require('readline-sync');

function questionario (){
    console.log("digite o seu nome:");
    let nome = terminal.prompt();
    console.log("Digite a sua idade");
    let idade = terminal.prompt();

    console.log("O nome informado foi: ", nome,".");
    console.log("A idade informada foi:",idade," anos.");
}

questionario();