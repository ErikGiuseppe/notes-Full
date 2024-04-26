const Controller = require("./Controller.js");
const NoteServices = require("../services/NoteServices.js");
const NoteRepository = require("../repository/NoteRepository.js");
const noteRepository = new NoteRepository();

const noteServices = new NoteServices();

class NoteController extends Controller {
  constructor() {
    super(noteRepository, noteServices);
  }
  async cadastrar(req, res) {
    const { title, text, tags, type } = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.cadastrar({
        title,
        text,
        tags,
        type,
      });
      res.status(201).send(novoRegistroCriado);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = NoteController;
