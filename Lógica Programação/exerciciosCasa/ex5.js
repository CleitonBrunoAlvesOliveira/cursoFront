const teminal = require("readline-sync");

function maiorValor() {
    console.log("Digite o primeiro numero");
    let n1 = parseFloat(teminal.prompt());
    console.log("Digite o segundo numero");
    let n2 = parseFloat(teminal.prompt());
    console.log("Digite o terceiro numero");
    let n3 = parseFloat(teminal.prompt());

    let maior = n1

    if (n2 > maior) {
        maior = n2;
    }else if (n3 > maior) {
        maior= n3;
    }
    console.log(`o numero maior apresentado foi ${maior}`);
}

maiorValor();