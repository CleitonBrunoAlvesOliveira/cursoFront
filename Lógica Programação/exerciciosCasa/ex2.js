const terminal = require("readline-sync");

function media(n1, n2, n3){
    return n1 + n2 + n3;
}

function mediaNota(){
    console.log("Digite a primeira nota");
    let n1 = parseInt(terminal.prompt());
    console.log("Digite a segunda nota");
    let n2 = parseInt(terminal.prompt());
    console.log("Digite a terceira nota");
    let n3 = parseInt(terminal.prompt());

    let somaNota = n1 + n2 + n3;
    let notaMedia = somaNota / 3;
    let resFinal = notaMedia.toFixed(1);
    
    console.log("A media foi", resFinal);
    if(resFinal >= 7){
        console.log("O aluno foi aprovado!!!");
    }else if(resFinal <= 7){
        console.log("o Aluno foi reprovado!!!!");
   }
}
 mediaNota();