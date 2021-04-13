const terminal = require("readline-sync");

function lista(){
    let list = [];
    index = 0;
    while (index < 10) {
        console.log("Digite nomes: ",(index+1));
        list[index] = terminal.prompt();
        index++;
    }
}

lista();