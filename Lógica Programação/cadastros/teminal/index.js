const repositorio = require('./repositorio');
const ServiceContato = require('./servico');
const Contato = require('./contato');
const servico = new ServiceContato(repositorio);

module.exports = {
    Contato,
    servico
}