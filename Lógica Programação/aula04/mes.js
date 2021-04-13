const terminal = require("readline-sync");

function escolhaMes(){
    console.log("Digite um numero de 1 a 12.");
    let numero = parseInt(terminal.prompt());
    let mes = '';

    switch(numero){
        case 1:
            mes ='Janeiro';
            break;
       case 2:
            mes ='Fevereiro';
            break;
       case 3:
            mes ='Março';
            break;
        case 4:
            mes ='Abril';
            break;
        case 5:
            mes ='Maio';
            break;
        case 6:
            mes ='Junho';
            break;
        case 7:
            mes ='Julho';
            break;
        case 8:
            mes ='Agosto';
            break;
        case 9:
            mes ='Setembro';
            break;
        case 10:
            mes ='Outubro';
                break; 
        case 11:
            mes ='Novembro'
            break; 
        case 12:
            mes ='Dezembro'
            break;  
        default:
            mes = "Nenhuma opção valida foi digitada";
            break;     

    } 
    console.log(`o mês escolhido foi ${mes}`) ;
}
escolhaMes();