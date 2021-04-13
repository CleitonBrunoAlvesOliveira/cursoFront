const terminal = require("readline-sync");

/*28) Escreva um script que solicite 3 notas e apresente o valor da média das notas. 
O programa deve permanecer solicitando novas notas enquando a primeira nota informada for diferente de -1.

29) Escreva um programa que solicite o preço de um produto e o valor de desconto a ser aplicado,
 em seguida calcule o novo valor do produto com o desconto aplicado 
(Usem o comando window.alert(novoPreco)). 
O programa deve voltar a executar automaticamente até que o usuário digite o valor 0 como preço do produto.*/


function media() {
  console.log("Digite o primeiro numero");
  let n1 = parseFloat(terminal.prompt());
  while (n1 != -1) {
    console.log("Digite o segundo numero");
    let n2 = parseFloat(terminal.prompt());
    console.log("Digite o terceiro numero");
    let n3 = parseFloat(terminal.prompt());

    let soma = n1 + n2 + n3;
    resultado = soma;
    let mediaFinal = soma / 3;

    console.log("Digite o primeiro numero");
  n1 = parseFloat(terminal.prompt());

  }



  }



media();