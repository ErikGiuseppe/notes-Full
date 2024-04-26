const Repository = require("./Repository.js");
const dataSource = require("../models/index.js");

class PessoaRepository extends Repository {
  constructor() {
    super("Pessoa");
  }
  async cadastrar(dadosDoRegistro) {
    return dataSource[this.model].create({ ...dadosDoRegistro });
  }
}

module.exports = PessoaRepository;
