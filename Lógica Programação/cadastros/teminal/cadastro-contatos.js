class CadastroContato{
    constructor(controle, terminal){
        this.controle = controle;
        this.terminal = terminal;

    }
    mostrarMenu(){
        let opcao =-1;
        while (opcao != 5){
            console.log("======================");
            console.log("      Menu Contato    ");
            console.log("======================");
            console.log("1 - Listar contatos");
            console.log("2 - Inserir Novo Contato");
            console.log("3 - Atualizar Contato");
            console.log("4 - Remover Contato");
            console.log("5 - Voltar ao Menu Principal");
            opcao =  parseInt(this.terminal.prompt());
            this.executar(opcao);
        }

    }
    executar(opcao){
        switch(opcao){
            case 1:
                this.listarContatos();
                break;
            case 2:
                this.inserirContato();
                break;
            case 3:
                this.atualizarContato();
                break;
            case 4:
                this.removerContato();
                break;               
        }
        if (opcao < 1 || opcao > 5) {
            console.log("Opção Invalida");
        }
    }

    listarContatos(){
        console.log('=================');
        console.log('Lista de Contato');
        console.log('=================');

        const totalContatos = this.controle.getTotalContato();
        if (totalContatos === 0) {
            console.log('Não Existe Contatos Cadastrados')
        }else{
            for(let index = 0; index < totalContatos; index++){
                const contato = this.controle.getContato(index);
                const{id,nome,email,telefone} = contato;
                console.log(`${id} - ${nome} - ${email} - ${telefone}`);
            }
        }
    }
    inserirContato(){
        console.log('=================');
        console.log('Inserir  Novo Contato');
        console.log('=================');
        console.log('Informe o nome do contato');
        const nome = this.terminal.prompt();
        console.log('Informe o email do contato');
        const email = this.terminal.prompt();
        console.log('Informe o telefone do contato');
        const telefone = this.terminal.prompt();
        this.controle.criarContato(nome, email, telefone);
        console.log('Cadastro Realizado');

    }

    atualizarContato(){
        console.log('=================');
        console.log('Atualizar Contato');
        console.log('=================');
        console.log('Informe o codigo do contato');
        const id = parseInt(this.terminal.prompt());
        const contato =  this.controle.getContadorPorId();
        if (contato) {
            console.log('Atualizar Contato');
        console.log('=================');
        console.log('Informe o nome do contato');
        contato.nome = this.terminal.prompt();
        console.log('Informe o email do contato');
        cotato.email = this.terminal.prompt();
        console.log('Informe o telefone do contato');
        contato.telefone = this.terminal.prompt();
        this.controle.criarContato(nome, email, telefone);
        console.log('Cadastro Atualizado');
        } else {
            console.log('Contato não encontrado');

        }

    }
    removerContato(){
        console.log('=================');
        console.log('Remover Contato');
        console.log('=================');
        console.log('Informe o nome do contato');
        const id = parseInt(this.terminal.prompt());
        const contato = this.controle.getContatoPorId(id);
        if (contato) {
            this.controle.removerContato(contato);
            console.log('Cadastro Removido');
        }else{
            console.log('Cadastro não encontrado');
        }
    }
}
