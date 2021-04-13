const terminal = require("readline-sync");

function conceito(){
    console.log("Digite a primeira nota");
    let nota1 = parseInt(terminal.prompt());
    console.log("Digite a segunda nota");
    let nota2 = parseInt(terminal.prompt());
    console.log("Digite a terceira nota");
    let nota3 = parseInt(terminal.prompt());

    let mediaSoma = nota1 + nota2 + nota3;
    let mediaNota = mediaSoma / 3;
    let mediaFinal = mediaNota.toFixed(1);
    
    //console.log("a media do aluno foi", medianota);
    
        
    
    if (mediaNota >= 9) {
        console.log(`a media foi ${mediaFinal} e o aluno tem o conceito A`);
     }else if (mediaFinal >= 7 && mediaFinal < 9) {
         console.log(`a media foi ${mediaNota} e o aluno tem o conceito B`);
     }else if (mediaFinal  >= 5 && mediaFinal < 7) {
        console.log(`a media foi ${mediaFinal} e o aluno tem o conceito C`);
     }else if (mediaFinal < 5) {
         console.log(`a media foi ${mediaFinal} e o aluno tem o conceito I`)
     }
    
}
conceito();
