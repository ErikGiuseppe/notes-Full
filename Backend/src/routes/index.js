const express = require("express");
const pessoas = require("./pessoasRoute");
const usuarios = require("./usuariosRoute");
const auth = require("./authRoute");
const role = require("./role");
const permissao = require("./permissao");
const seguranca = require("./seguranca");
const note = require("./NoteRoute");
module.exports = (app) => {
  app.use(
    express.json(),
    note,
    auth,
    usuarios,
    pessoas,
    role,
    permissao,
    seguranca
  );
};
