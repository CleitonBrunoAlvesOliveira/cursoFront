const terminal = require("readline-sync");

function exercicio26() {

    let opcao = 0;

    while (opcao <= 10 || opcao >20 ) {

    console.log("Digite um numero entre 10 e 20");
    opcao = parseInt(terminal.prompt());
    }
    while(opcao >= 0){
        console.log(opcao);
        opcao--;
    }
    
}
exercicio26();

