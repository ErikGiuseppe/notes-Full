const Services = require("./Services.js");
const dataSource = require("../models");
const uuid = require("uuid");
const NoteRepository = require("../repository/NoteRepository.js");
const noteRepository = new NoteRepository();

class NoteServices extends Services {
  constructor() {
    super(noteRepository);
  }
  async cadastrar(dto) {
    try {
      const newNote = await noteRepository.criaRegistro(dto);
      return newNote;
    } catch (error) {
      throw new Error("Erro ao cadastrar nota");
    }
  }
}

module.exports = NoteServices;
