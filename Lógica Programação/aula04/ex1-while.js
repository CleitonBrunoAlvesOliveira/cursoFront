function operadorWhile(){
    let soma = 0;
    let atual = 1;

    while(atual >= 10){
        soma = soma + atual;
        atual = atual +1 ;
    }
    console.log("a soma dos numero é", soma);
}

operadorWhile();