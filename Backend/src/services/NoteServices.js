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
  async getAllDistinct() {
    const note = await noteRepository.pegaTodosOsRegistros();
    var types = [];

    note.map((props, index) => {
      if (index != 0) {
        types = types.filter(function (e) {
          return e !== props.type;
        });
      }

      types.push(props.type);
    });

    return types;
  }
  async getALLType(type) {
    
    const note = await noteRepository.pegaTodosOsRegistros(type);
  

    return note;
  }
}

module.exports = NoteServices;
