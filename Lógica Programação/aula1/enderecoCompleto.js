const terminal = require("readline-sync");

function enderecoCompleto(){
    console.log("nome da rua:");
    let rua = terminal.prompt();

    console.log("numero:");
    let numero = terminal.prompt();

    console.log("complemento:");
    let complemento = terminal.prompt();

    console.log("bairro:");
    let bairro = terminal.prompt();

    console.log("cep:");
    let cep = terminal.prompt();

    console.log("cidade:");
    let cidade = terminal.prompt();

    console.log("Os dados informados são:");
    console.log("rua", rua);
    console.log("numero", numero);
    console.log("complemento", complemento);
    console.log("bairro", bairro);
    console.log("cep", cep);
    console.log("cidade", cidade);



}

enderecoCompleto();