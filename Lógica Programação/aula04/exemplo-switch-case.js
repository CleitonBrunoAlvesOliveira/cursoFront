const terminal = require("readline-sync");

function exemploOperadorSwitchCase(){
    console.log("Digite um numero entre 1 e 7");
    let numero = parseInt(terminal.prompt());
    let texto = '';
    switch(numero){
        case 1 :
            texto = 'Domingo';
            break;
        case 2 :
            texto = 'Segunda-feria';
             break;
        case 3 :
            texto = 'Terça-feira';
            break;
        case 4 :
            texto = 'Quarta-feira';
            break; 
        case 5 :
            texto = 'Quinta-feira';
            break; 
        case 6 :
        texto = 'Sexta-feira';
            break;
        case 7 :
        texto = 'Sabado';
          break;     
        default : // esse não é obrigatorio mas nao vai retornar valor nenhum
        
            texto = 'a opção invalida';
            break;                
    }
    console.log(`Você escolheu ${texto}`);

}
exemploOperadorSwitchCase();