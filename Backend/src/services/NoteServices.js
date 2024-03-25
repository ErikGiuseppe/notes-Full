const Services = require("./Services.js");
const dataSource = require("../models");
const uuid = require("uuid");


class NoteServices extends Services {
  constructor() {
    super("notes");
  }
  async cadastrar(dto) {
    try {
      const newNote = await dataSource[this.model].create({
        id: uuid.v4(),
        title: dto.title,
        text: dto.text,
        tags: dto.tags,
        type: dto.type
      });
      return newNote;
    } catch (error) {
      throw new Error("Erro ao cadastrar nota");
    }
  }
}

module.exports = NoteServices;
