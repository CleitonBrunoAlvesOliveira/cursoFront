
var lista = [];

var posicaoLista;

function cadastrar() {

    var aluno = document.getElementById("aluno");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    media = (parseInt(n1.value) + parseInt(n2.value)) / 2;
    situacao = media >= 7 ? "Aprovado" : "reprovado";


    lista.push({ 'aluno': aluno.value, 'n1': n1.value, 'n2': n2.value, 'media': media, 'situacao': situacao })


    aluno.value = "";
    n1.value = "";
    n2.value = "";



    alert("Cadastrado com sucesso...");


    listar();
    qtdSituacao();


    aluno.focus();
}

function listar() {
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    for (var indice = 0; indice < lista.length; indice++) {
        var linha = tabela.insertRow(-1);
        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);
        var coluna3 = linha.insertCell(2);
        var coluna4 = linha.insertCell(3);
        var coluna5 = linha.insertCell(4);
        var coluna6 = linha.insertCell(5);

        // n2
        coluna1.innerHTML = indice + 1;
        coluna2.innerHTML = lista[indice].aluno;
        coluna3.innerHTML = lista[indice].n1;
        coluna4.innerHTML = lista[indice].n2;
        coluna5.innerHTML = lista[indice].media;
        coluna6.innerHTML = lista[indice].situacao;


    }
}
function selecionar(posicaoLista) {
    // exibir dados no formulario
    document.getElementById("aluno").value = lista[posicaoLista].aluno;
    document.getElementById("n1").value = lista[posicaoLista].n1;
    document.getElementById("n2").value = lista[posicaoLista].n2;
}


function qtdSituacao() {

    // contador

    var aprovado = 0;
    var reprovado = 0;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].media >= 7) {
            aprovado++;
        } else {
            reprovado++;
        }
    }
    document.getElementById('qtdAprovado').innerHTML = aprovado;
    document.getElementById('qtdReprovado').innerHTML = reprovado;

}