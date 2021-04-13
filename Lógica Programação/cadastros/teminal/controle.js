const Contato = require('../app/contato/contato');
class ContatoController{
    constructor(servico){
        this.servico = servico;
    }
    getTotalContatos(){
        return this.servico.buscarTodos();
    }
    getContato(index){
        const contatos = this.servico.buscarTodos();
        if(index > -1 && index < contatos.length){
            return {...contatos[index]}
        }else{
            return null;
        }
    }
    criarContato(nome,email,telefone){
        const contato = new Contato(null,nome,email,telefone);
        this.servico.inserir(contato);
    }
    getContatoPorId(id){
        const contato =  this.servico.buscarPorId(id);
        if(contato){
            return {...contato}
        }else{
            return null;
        }
    }
    atualizarContato(contato){
        this.servico.atualizar(contato);
    }
    removerContato(contato){
        if(contato){
            this.servico.remover(contato.id);
        }
    }
}

module.exports = ContatoController;