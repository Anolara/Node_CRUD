const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.listarUsuarios);
router.get("/:id", userController.buscarUsuario);
router.post("/", userController.criarUsuario);
router.delete("/:id", userController.deletarUsuario);

module.exports = router;
