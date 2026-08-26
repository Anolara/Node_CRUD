import express from "express";
import userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import {
  userSchema,
  userPatchSchema,
  idSchema,
} from "../schemas/userSchema.js";

const router = express.Router();

router.get("/", userController.listarUsuarios);
router.get(
  "/:id",
  validate(idSchema, "params"),
  userController.encontrarUsuario,
);
router.post("/", validate(userSchema), userController.criarUsuario);
router.delete(
  "/:id",
  validate(idSchema, "params"),
  userController.deletarUsuario,
);
router.patch(
  "/:id",
  validate(userPatchSchema),
  validate(idSchema, "params"),
  userController.atualizarUsuario,
);

export default router;
