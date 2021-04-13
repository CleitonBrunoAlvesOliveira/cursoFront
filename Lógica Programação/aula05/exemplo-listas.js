const terminal = require("readline-sync");

function exemploListas(){
                // 0            1           2
    let frutas = ['Abacaxi','Maracuja','Banana'];
    let notas = [9.5, 10, 7.8, 9];
    let nomes = [];// [] sinal paa listas ou mesmmo que Array
    nomes[0]= 'João';//[] indice sempre comça com posição 0
    nomes[1]= 'Maria';
    nomes[2]= 'Ana';

    
    console.log("A quatidade de frutas é", frutas.length);
    console.log("A quatidade de notas é", notas.length);
    console.log("A quatidade de nomes é", nomes.length);

    console.log('As frutas são');
    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);

    let index = 0;

    console.log('Os nomes saõ: ');
    while (index < nomes.length) {
        console.log(nomes[index]);
        index++;
    }

    let cursos =[];
    index = 0;
    while (index < 5) {
        console.log("digite o nome do curso (",(index+1),"/5");
        cursos[index] = terminal.prompt();
        index++
    }
    index =0;
    console.log('As cidades informadas foram: ');
    while (index < cursos.length) {
        console.log(cursos[index++]);

    }

    let cidades = [];
    console.log("Digite o nome de 5 cidades que gostaria de visitar");
    while (cidades.length < 5) {
        cidades.push(terminal.prompt());

    }
    index = 0;
    console.log("as cidade informadas foram: ");
    while (index < cidades.length) {
       console.log(cidades[index++]); 
    }
    
    }
exemploListas();
