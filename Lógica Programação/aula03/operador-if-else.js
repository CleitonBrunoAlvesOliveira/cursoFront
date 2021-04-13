const terminal = require("readline-sync");

function verificarSituacaoEleitoral(){
    console.log("Digite a sua idade: ");
    let idade = parseInt( terminal.prompt());

    if (idade >= 18){
        console.log(" Voce tem a obrigação de fazer o titulo eleitoral");
    } else if(idade >= 16){
        console.log("Voce pode fazer o titulo eleitoral");
    } else {
        console.log("voce não tem idade minima para votar");
    }
    
    console.log("## Fim da Aplicação ##");
}

verificarSituacaoEleitoral();
