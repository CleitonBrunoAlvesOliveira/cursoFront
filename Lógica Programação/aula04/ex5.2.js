const terminal = require("readline-sync");

function lerNota(mensagem) {
    console.log(mensagem);
    return parseFloat(terminal.prompt());
}

function isNotaValida(nota) {
    return nota >-1;
}

function calcularMedia(nota1,nota2,nota3) {
    return (nota1 + nota2 + nota3) / 3 ;

}

function mostrarResultado(resultado) {
    console.log(`a media das notas é ${resultado}`);
}

function exercicioMedia2() {
    let nota1 = lerNota('digite a primeira nota');
    while (isNotaValida(nota1)) {
        let nota2 = lerNota('digite a segunda nota');
        let nota3 = lerNota('digite a terceira nota');
        const resultado = calcularMedia(nota1,nota2,nota3);
        mostrarResultado(resultado);
        nota1 = lerNota('digite a primeira nota');
    }
}
exercicioMedia2();