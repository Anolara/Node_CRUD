let users = [
  {
    id: 1,
    name: "Paulo",
    email: "paulo@paulo.com",
  },
  {
    id: 2,
    name: "Bruna",
    email: "bruna@bruna.com",
  },
];

const listarUsuarios = (req, res) => {
  res.json(users);
};

const criarUsuario = (req, res) => {
  const { name, email } = req.body;

  const novoUsuario = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(novoUsuario);

  res.status(201).json(novoUsuario);
};

const buscarUsuario = (req, res) => {
  const id = Number(req.params.id);
  const usuario = users.find((user) => user.id == id);

  if (!usuario) {
    res.status(404).json({ message: "Usuario nao encontrado." });
  }
  res.json(usuario);
};

const deletarUsuario = (req, res) => {
  const id = Number(req.params.id);
  const usuario = users.find((user) => user.id == id);

  if (!usuario) {
    res.status(404).json({ message: "Usuario nao encontrado." });
  }
  users = users.filter((user) => user.id != id);
  res.json({ message: "Usuario apagado." });
};

module.exports = {
  listarUsuarios,
  criarUsuario,
  buscarUsuario,
  deletarUsuario,
};
