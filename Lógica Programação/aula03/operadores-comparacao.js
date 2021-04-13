const terminal = require("readline-sync");

function isMaiorOuIgual (valor1, valor2){
    return valor1 >= valor2;
}

function isMaior(valor1, valor2){
    return valor1 > valor2;
}

function isMenorOuIgual(valor1, valor2){
    return valor1 >= valor2
}

function isMenor (valor1, valor2){
    return valor1 < valor2;
}

function isIgual (valor1, valor2){
    return valor1 == valor2;
}

function isDifertente (valor1, valor2){
    return valor1 != valor2;
}

function comprarValores(){
    console.log("Digite o primeiro numero");
    let valor1 = parseInt (terminal.prompt());
    console.log("Digite o segundo numero");
    let valor2 = parseInt (terminal.prompt());
    console.log(`${valor2} >= ${valor2} ? R: ${isMaiorOuIgual(valor1,valor2)}`);
    console.log(`${valor2} > ${valor2} ? R: ${isMaior(valor1,valor2)}`);
    console.log(`${valor2} <= ${valor2} ? R: ${isMenorOuIgual(valor1,valor2)}`);
    console.log(`${valor2} < ${valor2} ? R: ${isMenor(valor1,valor2)}`);
    console.log(`${valor2} == ${valor2} ? R: ${isIgual(valor1,valor2)}`);
    console.log(`${valor2} != ${valor2} ? R: ${isDifertente(valor1,valor2)}`);
}

comprarValores();