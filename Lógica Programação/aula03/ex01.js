const terminal = require("readline-sync");

function getMensagem(nota){
    let mensagem  = '';
    if(nota >=7){
       mesagem = 'Aprovado';
    }else {
        mensagem = 'Reprovado';
    } 
    return mensagem;
}

function exercicio1(){
    console.log("Informe a nota do aluno");
    let nota = parseFloat(terminal.prompt());
    let resultado = getMensagem(nota);
    console.log(`O aluno foi ${resultado}`);
}
exercicio1();