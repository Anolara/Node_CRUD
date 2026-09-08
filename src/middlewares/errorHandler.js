import { Prisma } from "@prisma/client";
import { z } from "zod";
import AppError from "../errors/appError.js";

const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error instanceof z.ZodError) {
    return res.status(400).json({
      mensagem: "Dados inválidos",
      erros: error.issues,
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return res.status(409).json({
        mensagem: "Email já cadastrado",
      });
    }
    if (error.code === "P2025") {
      return res.status(404).json({
        mensagem: "Usuário não encontrado",
      });
    }
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      mensagem: error.message,
    });
  }

  return res.status(500).json({
    mensagem: "Erro interno do servidor",
  });
};

export default errorHandler;
