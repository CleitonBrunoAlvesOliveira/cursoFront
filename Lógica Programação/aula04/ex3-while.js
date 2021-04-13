const terminal = require("readline-sync");


function fatorial(){
    console.log("Digite um numero entre 1 e 10");
    let numero = parseInt(terminal.prompt());
    
  
  while (numero <1 || numero >10) {
        console.log("O numero deve ser entre 1 e 10");
        let numero = parseInt(terminal.prompt());
        return numero;}

     let fator = 1;
     while (numero > 1) {
       fator = fator * numero;
       numero--;
     }
   
      console.log(`o fatorial do numero solicitado é ${fator}`);
  }
fatorial();