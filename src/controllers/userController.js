import prisma from "../lib/prisma.js";

const listarUsuarios = async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

const criarUsuario = async (req, res) => {
  try {
    const { name, email } = req.body;
    const novoUsuario = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({
      message: "Usuario criado com sucesso.",
      user: novoUsuario.name,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Erro ao criar usuário.",
    });
  }
};

const encontrarUsuario = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user === null) {
      return res.status(404).json({
        message: "Usuário não encotrado.",
      });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({
      message: "Erro interno.",
    });
  }
};

const deletarUsuario = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (err) {
    return res.status(404).json({
      message: "Usuário não encontrado.",
    });
  }
};

export default {
  listarUsuarios,
  criarUsuario,
  encontrarUsuario,
  deletarUsuario,
};
