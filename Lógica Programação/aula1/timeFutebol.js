const terminal = require("readline-sync");

function timeFutebol(){

console.log("Infome o nome do seu time de futebol");
let timeFutebol = terminal.prompt();

console.log("seu time de futebol é ", timeFutebol);
}

timeFutebol();