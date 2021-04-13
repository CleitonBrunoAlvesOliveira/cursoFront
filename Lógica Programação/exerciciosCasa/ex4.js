const terminal = require("readline-sync");

function menor(){
 console.log("Digite o primeiro valor");
 let valor1 = parseFloat(terminal.prompt());
 console.log("Digite o segundo valor");
 let valor2 = parseFloat(terminal.prompt());
 console.log("Digite o terceiro valor");
 let valor3 = parseFloat(terminal.prompt());

 let menorValor = valor1
 
 if(valor2 < menorValor)
        valor2 = menorValor;
       if(valor3 < menorValor)
        menorValor = valor3;
    console.log(`o menor valor digitado foi ${menorValor}`);
}

menor();
