const Controller = require('./Controller.js')
const PessoaServices = require('../services/PessoaServices.js')

const pessoaServices = new PessoaServices()

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices)
  }
  async pegaUmPorNome(req, res) {
    const { nome } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorNome(String(nome));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // erro
    }
  }
  
}

module.exports = PessoaController