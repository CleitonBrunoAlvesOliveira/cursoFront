const terminal = require("readline-sync");

function profissao(){
    console.log("infome seu nome");
    let nome = terminal.prompt();

    console.log("Informe sua profissao");
    let profissao = terminal.prompt();

    console.log("tempo de experiencia");
    let experiencia = terminal.prompt();

}

profissao();