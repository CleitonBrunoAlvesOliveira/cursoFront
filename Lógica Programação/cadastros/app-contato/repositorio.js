class RepositorioContato{
    constructor(){
        this.contatos = [];
    }

    inserir(contato){
        contato.id =  new Date().getTime();
        this.contatos.push(conato);
    }
    atualiza(conato){
        for (let index = 0; index < this.contatos.length; index++){
            let contatoAtual = this.contatos[index];
            if (contatoAtual.id === conatato.id) {
                contatoAtual.nome = contato.nome;
                contatoAtual.email = contato.email;
                contatoAtual.telefone = contato.telefone;
            }
        }
    }
    remover(id){
        let index = -1;
        for(let i = 0; i< this.contatos.length; i++){
            if (this.contatos[i].id ===id) {
            index = i;
            break
            }
        }
        if (index > -1) {
            this.contatos.splice(index,1);
        }
    }
    buscarPorId(id){
        for(let index = 0; index <this.contatos.length; index++){
            if (this.contatos[index].id === id) {
                return{...this.contatos[index]}
            }
        }
        return null;
    }
    buscarTodos(){
        return[...this.contatos];
    }

}

module.exports = new RepositorioContato;