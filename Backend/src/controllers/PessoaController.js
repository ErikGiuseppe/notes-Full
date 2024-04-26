const Controller = require("./Controller.js");
const PessoaRepository = require("../repository/PessoaRepository.js");
const PessoaServices = require("../services/PessoaServices.js");
const pessoaServices = new PessoaServices();
const pessoaRepository = new PessoaRepository();

class PessoaController extends Controller {
  constructor() {
    super(pessoaRepository, pessoaServices);
  }
  async pegaUmPorNome(req, res) {
    const { nome } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorNome(
        String(nome)
      );
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // erro
    }
  }
}

module.exports = PessoaController;
