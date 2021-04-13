
var clientes = [];
// posição cliente usado para excliur
var posicaoCliente;

// salvar informação no local storage

function vetorLocal() {
    localStorage.setItem('dados', JSON.stringify(clientes));
}

// verifica se tem json no localstorage
window.onload = function () {
    if(localStorage.getItem("dados") != null){
        clientes = JSON.parse(localStorage.getItem("dados"));
        listar();
    }
}
// cadastrar
function cadastrar() {
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");

    // enviar para o vetor.... nome entre aspas sao colunas e os .value sao as linhas

    clientes.push({ 'nome': nome.value, 'idade': idade.value });

    // limpar campos

    nome.value = "";
    idade.value = "";

    // cursor no campo nome 

    nome.focus();

    // mensagem

    alert("Cadastrado com sucesso...");

    // teste pra ver se funcionou    
    //   console.table(clientes);
    // alterar  
    // listar função chamanda antes de ser criada
    listar();
    vetorLocal();
}

    function listar() {
        // obter a tabela
        var tabela = document.getElementById("tabela");
        // limpar documento das tabelas
        tabela.innerHTML = "";
        // laco de repetição
        for (var indice = 0; indice < clientes.length; indice++) {

            // inserir linhas
            var linha = tabela.insertRow(-1);
            // colunas
            var coluna1 = linha.insertCell(0);
            var coluna2 = linha.insertCell(1);
            var coluna3 = linha.insertCell(2);
            var coluna4 = linha.insertCell(3);
            // valor
            coluna1.innerHTML = indice + 1;
            coluna2.innerHTML = clientes[indice].nome;
            coluna3.innerHTML = clientes[indice].idade;
            coluna4.innerHTML = "<button class='btn btn-success' onclick='selecionar(" + indice + ")'>Selecionar</button>";
        }
    }


// selecionar

function selecionar(posicao) {

    // enviar posição
    posicaoCliente = posicao;
    // exibir dados no formulario
    document.getElementById("nome").value = clientes[posicao].nome;
    document.getElementById("idade").value = clientes[posicao].idade;
    // botoes
    document.getElementById("botao_cadastrar").style.display = "none";
    document.getElementById("botao_alterar").style.display = "inline-block";
    document.getElementById("botao_excluir").style.display = "inline-block";
    document.getElementById("botao_cancelar").style.display = "inline-block";

}
function alterar() {
    // pegar valores para alterar
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    // alterar vetor

    clientes[posicaoCliente] = {"nome":nome, "idade":idade};
    // listar
    listar();

    // salvar alteração no localstorage
    vetorLocal();
    // limpar campos
    cancelar();
}


// excluir
function excluir() {

    // valida exclusao
    var valida = confirm("Deseja realmente excluir esse cliente?");

    if(valida == true){
    // remover vetor
    clientes.splice(posicaoCliente, 1);
    // atualizar tabela
    listar();

    // salvar remoção locastorage
    vetorLocal();
    // limpar campos
    cancelar();
    }else{
        alert("Cliente não removido");
    }
}
// cancelar
function cancelar() {
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";

        nome.focus();
    // botoes
    document.getElementById("botao_cadastrar").style.display = "inline-block";
    document.getElementById("botao_alterar").style.display = "none";
    document.getElementById("botao_excluir").style.display = "none";
    document.getElementById("botao_cancelar").style.display = "none";
}