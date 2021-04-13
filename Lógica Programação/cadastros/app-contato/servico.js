class ServiceContato{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    inserir(contato){
        this.repositorio.inserir(contato);
    }
    atualizar(contato){
        this.repositorio.atualizar(contato);
    }
    remover(id){
        this.repositorio.remover(id);
    }
    buscarPorId(id){
        return this.repositorio.buscarPorId(id);
    }
    buscarTodos(){
        return this.repositorio.buscarTodos()
    }
}

module.exports = new ServiceContato;