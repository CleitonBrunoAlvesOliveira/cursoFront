const terminal = require("readline-sync");

function nota (nota1, nota2){
    return nota1 + nota2 ;
}

function notaAluno(){
    console.log("Digite a nota do aluno");
    notaAluno = parseFloat(terminal.prompt());

    if(notaAluno < 7){
        console.log("O aluno foi reprovado");
   }else if(notaAluno >= 7){
       console.log("O aluno foi aprovado");
   }
}
notaAluno();