import userService from "../services/userService.js";

const listarUsuarios = async (req, res, next) => {
  try {
    const users = await userService.listarUsuarios();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const criarUsuario = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await userService.criarUsuario(name, email);

    res.status(201).json({
      message: "Usuario criado com sucesso.",
      user: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};

const buscarUsuario = async (req, res, next) => {
  try {
    const user = await userService.buscarUsuario(req.params.id);

    return res.json(user);
  } catch (err) {
    next(err);
  }
};

const deletarUsuario = async (req, res, next) => {
  try {
    await userService.deletarUsuario(req.params.id);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const atualizarUsuario = async (req, res, next) => {
  try {
    const user = await userService.atualizarUsuario(req.params.id, req.body);

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
  buscarUsuario,
  deletarUsuario,
  atualizarUsuario,
};
