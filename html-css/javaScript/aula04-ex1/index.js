
var lista = [];

var posicaoLista;

function cadastrar() {

    var nome = document.getElementById("nome");
    var marca = document.getElementById("produto");
    var valor = document.getElementById("valor");

    lista.push({ 'nome': nome.value, 'marca': marca.value, 'valor': valor.value })


    nome.value = "";
    produto.value = "";
    valor.value = "";



    alert("Cadastrado com sucesso...");


    listar();
    nome.focus();
}

function listar(){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    for (var indice = 0; indice < lista.length; indice++) {
        var linha = tabela.insertRow(-1);
        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);
        var coluna3 = linha.insertCell(2);
        var coluna4 = linha.insertCell(3);

        // valor
        coluna1.innerHTML = indice + 1;
        coluna2.innerHTML = lista[indice].nome;
        coluna3.innerHTML = lista[indice].marca;
        coluna4.innerHTML = lista[indice].valor;
        
    }
}
function selecionar(posicaoLista) {
        // exibir dados no formulario
    document.getElementById("nome").value = lista[posicaoLista].nome;
    document.getElementById("produto").value = lista[posicaoLista].produto;
    document.getElementById("valor").value = lista[posicaoLista].valor;
}