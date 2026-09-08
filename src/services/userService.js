import AppError from "../errors/appError.js";
import prisma from "../lib/prisma.js";

const listarUsuarios = () => {
  return prisma.user.findMany();
};

const buscarUsuario = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  return user;
};

const criarUsuario = (name, email) => {
  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
};

const atualizarUsuario = (id, data) => {
  return prisma.user.update({
    where: {
      id,
    },
    data,
  });
};

const deletarUsuario = (id) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export default {
  listarUsuarios,
  buscarUsuario,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
};
