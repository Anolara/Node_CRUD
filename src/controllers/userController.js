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

module.exports = {
  listarUsuarios,
  criarUsuario,
};
