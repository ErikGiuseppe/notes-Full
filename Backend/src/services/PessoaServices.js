const Services = require('./Services.js');
const dataSource = require('../models');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }
  async pegaUmRegistroPorNome(nome) {
    return dataSource[this.model].findAll({
      where: {
        nome: nome,
      },
    });
  }
}

module.exports = PessoaServices;