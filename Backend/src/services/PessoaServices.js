const Services = require("./Services.js");
const dataSource = require("../models/index.js");
const PessoaRepository = require("../repository/PessoaRepository.js");
const pessoaRepository = new PessoaRepository();

class PessoaServices extends Services {
  constructor() {
    super(pessoaRepository);
  }

  async pegaUmRegistroPorNome(nome) {
    const where = {
      nome: nome,
    };
    return this.entidadeRepository.pegaUmRegistro(where);
  }
  async cadastrar(dto) {
    try {
      const newPessoa = await this.entidadeRepository.cadastrar(dto);
      return newPessoa;
    } catch (error) {
      throw new Error("Erro ao cadastrar pessoa");
    }
  }
}

module.exports = PessoaServices;
