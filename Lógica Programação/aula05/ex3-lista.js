const terminal = require("readline-sync");

function exercicioMedia(){
    let  notas = [];
    let media = [];
    const LIMITE = 20;

    while (notas.length < LIMITE) {
     console.log(`Informe uma nota ${notas.length+1}/${LIMITE}`);
     notas.push(parseFloat(terminal.prompt()));
     media = media + notas[notas.length -1];
    }
    media = media / notas.length;
    console.log("As notas da turma foram: ");
    console.log(notas.join(", "));
    console.log("A media da turma foi ", media);
}
exercicioMedia();