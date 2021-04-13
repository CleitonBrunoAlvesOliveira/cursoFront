const terminal = require("readline-sync");

// Crie um script que solicite 3 notas e apresente o valor total das notas

function somar(numero1, numero2,numero3){
    return numero1 + numero2 + numero3 ;
}

function executarSoma(){
    console.log(">>digite as notas para ter o resultado<<");
    console.log("digite a primeira nota");
    let valor1 = parseFloat (terminal.prompt());
    console.log("Digite a segunda nota");
    let valor2 = parseFloat (terminal.prompt());
    console.log("Digite a terceira nota");
    let valor3 = parseFloat (terminal.prompt());
    let resultado = somar(valor1,valor2,valor3);
    console.log("a soma das notas é: ", resultado);

}
//executarSoma();

//Crie um script que solicite 3 notas, calcule a média das notas e apresente o valor total das notas juntamente com o valor da média.

function somarCalculoMedia (vlr1, vlr2, vlr3){
    return vlr1 + vlr2 + vlr3 ;
}

function calculo (){
    console.log("Digite valor1");
    let valor1 = parseFloat( terminal.prompt());
    console.log("digite valor2");
    let valor2= parseFloat (terminal.prompt());
    console.log("digite o valor3");
    let valor3 = parseFloat (terminal.prompt());
    let result = somarCalculoMedia (valor1, valor2, valor3);
    console.log("o resultado da soma é" , result);
    let mediaDosNumeros = result / 3;
    console.log("a media dos numero é ", mediaDosNumeros);
}
//calculo(); 

//Crie um script que solicite a idade do usuário e em seguida apresente o valor da sua idade daqui a 30 anos

/* function idadeFuturo (){
    return idade1 + idade2
}*/

function calculoIdade(){
    
    console.log("Digite a sua idade atual");
    let idadeAtual = parseFloat(terminal.prompt());
    console.log("A sua idade atual é", idadeAtual," mas daqui a 30 anos você terá:",);
    let idadeFuturo =30;
    let somaIdade = idadeAtual + idadeFuturo;
    
    console.log(somaIdade)

}
//calculoIdade(); 

//Crie um script que solicite a idade do usuário em anos e aprente o valor da idade em dias, considere que cada ano possui 365 dia

function idadeDias(){
    console.log("Digite a sua idade");
    let idade = terminal.prompt();
    console.log("A sua idade em dias é:");
    let diasAno = 365;
    console.log( idade * diasAno, "dias"); 

}
//idadeDias();

//Crie um script que a quantidade de combustível gasta em uma viagem e o total de quilometros percorridos, 
//en seguida calcule e apresente a média de km/l gasto na viagem.

function mediaCombustivel (){
    console.log("informe a quantidade de quilometros que ira percorrer");
   // let quilometros = parseFloat(terminal.prompt());
    let quilometros = terminal.prompt();
    let consumo = quilometros;
    let mediaConsumo = quilometros / consumo;
    console.log(`para percorrer ${quilometros} seu carro ira consumir ${consumo} litros`);
    console.log(`A media de consumo é ${mediaConsumo}`);

}
mediaCombustivel();
