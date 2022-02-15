const Role = require("../models/rol");
const Usuario = require("../models/user");

const rolValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado`);
  }
};

const existeEmail = async (correo = "") => {
  const correoValido = await Usuario.findOne({ correo });
  if (!correoValido) {
    throw new Error(`El correo ${correo} ya esta registrado`);
  }
};

const usuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El usuario con el id ${id} no existe`);
  }
};

module.exports = {
  rolValido,
  existeEmail,
  usuarioPorId,
};
