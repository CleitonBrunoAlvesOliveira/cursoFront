const terminal = require("readline-sync");

function somar (numero1 , numero2){

return numero1 + numero2;
}

function executarExemploSoma(){
    console.log(">> Soma de dois numeros<<");
    console.log("Digite o primeiro numero:");
    let valor1 = parseFloat(terminal.prompt());
    console.log("Digite o segundo numero:");
    let valor2 = parseFloat( terminal.prompt());
    let resultado = somar(valor1,valor2);
    console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`);        
}

function executarExemploSubtracao(){
    console.log(">> subtração de dois numeros<<");
    console.log("Digite o primeiro numero:");
    let valor1 = parseFloat(terminal.prompt());
    console.log("Digite o segundo numero:");
    let valor2 = parseFloat( terminal.prompt());
    let resultado = subtrair(valor1,valor2);
    console.log(`A subtrtação de ${valor1} e ${valor2} é ${resultado}`);        
}

function executarExemplomultiplicacao(){
    console.log(">> multiplicação de dois numeros<<");
    console.log("Digite o primeiro numero:");
    let valor1 = parseFloat(terminal.prompt());
    console.log("Digite o segundo numero:");
    let valor2 = parseFloat( terminal.prompt());
    let resultado = multiplicar(valor1,valor2);
    console.log(`A multiplicação de ${valor1} e ${valor2} é ${resultado}`);        
}

function executarExemplodivisao(){
    console.log(">> divisao de dois numeros<<");
    console.log("Digite o primeiro numero:");
    let valor1 = parseFloat(terminal.prompt());
    console.log("Digite o segundo numero:");
    let valor2 = parseFloat( terminal.prompt());
    let resultado = dividir(valor1,valor2);
    console.log(`A divisao de ${valor1} e ${valor2} é ${resultado}`);        
}

function executarExemploRestoDaDivisao(){
    console.log(">> resto da divisao de dois numeros<<");
    console.log("Digite o primeiro numero:");
    let valor1 = parseFloat(terminal.prompt());
    console.log("Digite o segundo numero:");
    let valor2 = parseFloat( terminal.prompt());
    let resultado = restoDaDivisao(valor1,valor2);
    console.log(`O resto da divisao de ${valor1} e ${valor2} é ${resultado}`);        
}
/*executarExemploSoma();
executarExemploSubtracao();
executarExemplomultiplicacao();
executarExemplodivisao();*/
executarExemploRestoDaDivisao();

function subtrair(valor1, valor2){
    return valor1 - valor2 ;
}

function dividir(valor1, valor2){
    return valor1 / valor2 ;
}
function multiplicar(valor1, valor2){
    return valor1 * valor2 ;
}
function restoDaDivisao(valor1, valor2){
    return valor1 % valor2 ;
}

