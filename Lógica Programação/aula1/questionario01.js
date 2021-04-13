const terminal = require("readline-sync");

function questionario01(){
    console.log("Digite seu nome: ");
    let nome = terminal.prompt();
    console.log("Digite o nome da sua mãe: ");
    let nomeMae = terminal.prompt();
    console.log("Digite o nome do seu pai: ");
    let nomePai = terminal.prompt();
    console.log("O nome digitado foi ",nome);
    console.log("Sua mãe se chama ", nomeMae);
    console.log("Seu pai se chama ",nomePai);
};

questionario01();