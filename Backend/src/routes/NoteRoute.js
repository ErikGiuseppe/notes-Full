const { Router } = require("express");
const NoteController = require("../controllers/NoteController");
// const roles = require('../middleware/roles.js')

const noteController = new NoteController();
const router = Router();

router.get("/note", (req, res) => noteController.pegaTodos(req, res));
router.get("/note/type", (req, res) => noteController.getAllDistinct(req, res));
// router.get('/note/:id', roles(["desenvolvedor"]),(req,res) => noteController.pegaUmPorId(req, res))
router.get("/note/type/:type", (req, res) => noteController.getAllType(req, res));
router.get("/note/id/:id", (req, res) => noteController.pegaUmPorId(req, res));
router.get("/note/nome/:nome", (req, res) =>
  noteController.pegaUmPorNome(req, res)
);
router.post("/note", (req, res) => noteController.cadastrar(req, res));
router.put("/note/id/:id", (req, res) => noteController.atualiza(req, res));
router.delete("/note/id/:id", (req, res) => noteController.exclui(req, res));

module.exports = router;
