const Repository = require("./Repository.js");
const dataSource = require("../models");
const uuid = require("uuid");

class NoteRepository extends Repository {
  constructor() {
    super("notes");
  }
}

module.exports = NoteRepository;
