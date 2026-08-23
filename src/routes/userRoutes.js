import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.listarUsuarios);
router.get("/:id", userController.encontrarUsuario);
router.post("/", userController.criarUsuario);
router.delete("/:id", userController.deletarUsuario);

export default router;
