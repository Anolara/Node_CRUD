import prisma from "../lib/prisma.js";

const listarUsuarios = async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

const criarUsuario = async (req, res) => {
  const { name, email } = req.body;

  const novoUsuario = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.status(201).json("Usuario criado com sucesso.");
};

const encontrarUsuario = async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (user == null) {
    return res.status(404).json({
      message: "Usuário não encotrado.",
    });
  }
  return res.json(user);
};

export default {
  listarUsuarios,
  criarUsuario,
  encontrarUsuario,
};
