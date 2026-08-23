import express from "express";
import userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import { userSchema, userPatchSchema } from "../schemas/userSchema.js";

const router = express.Router();

router.get("/", userController.listarUsuarios);
router.get("/:id", userController.encontrarUsuario);
router.post("/", validate(userSchema), userController.criarUsuario);
router.delete("/:id", userController.deletarUsuario);
router.patch(
  "/:id",
  validate(userPatchSchema),
  userController.atualizarUsuario,
);

export default router;
