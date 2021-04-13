const terminal = require("readline-sync");


function mostrarMenuPrincipal() {

    console.log("Depositar => 1");
    console.log("Verificar Saldo => 2");
    console.log("Sacar = 3");
}

function lerOpcaoUsuario() {

    let opcao = parseInt(terminal.prompt());
    return opcao;
}

function verificarOpcaoEscolhida(opcao) {
    let mensagem = '';
    switch (opcao) {
        case 1:
            mensagem = 'Faça o seu deposito';
            break;

        case 2:
            mensagem = 'O seu saldo esta Negativo';
            break;

        case 3:
            mensagem = 'Retire o seu dinheiro';
            break;

        default:
            mensagem = 'Opção Invalida';
    }
    return mensagem;
}
function mostrarOpcaoEscolhida(mensagem) {
    console.log(mensagem);
}

function exeBanco() {
    mostrarMenuPrincipal();
    let opcao = lerOpcaoUsuario();
    let mensagem = verificarOpcaoEscolhida(opcao);
    mostrarOpcaoEscolhida(mensagem);  


}
exeBanco();