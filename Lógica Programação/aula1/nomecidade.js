const terminal = require("readline-sync");

function nomeCidade(){
    console.log("Digite o nome da sua cidade");
    let nomeCidade = terminal.prompt();
    console.log("O nome da sua cidade é: ", nomeCidade);
}

nomeCidade();
