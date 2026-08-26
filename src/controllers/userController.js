import prisma from "../lib/prisma.js";

const listarUsuarios = async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

const criarUsuario = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({
      message: "Usuario criado com sucesso.",
      user: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};

const encontrarUsuario = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encotrado.",
      });
    }
    return res.json(user);
  } catch (err) {
    next(err);
  }
};

const deletarUsuario = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({
      message: "Usuário deletado com sucesso.",
      user: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};

const atualizarUsuario = async (req, res, next) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    return res.status(200).json({
      message: "Usuário atualizado com sucesso.",
      user: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  listarUsuarios,
  criarUsuario,
  encontrarUsuario,
  deletarUsuario,
  atualizarUsuario,
};
