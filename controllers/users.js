const { response, request } = require("express");
const Usuario = require("../models/user");
const bcryptjs = require("bcryptjs");

const usersGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - GetUsers",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usersPut = async (req, res = response) => {
  const { id } = req.params;

  const {_id, contraseña, google, correo, ...resto } = req.body;
  if (contraseña) {
    const salt = bcryptjs.genSaltSync();
    resto.contraseña = bcryptjs.hashSync(contraseña, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    msg: "put API - PutUsersr",
    usuario
  });
};

const usersPost = async (req, res = response) => {
  const { nombre, apellido, cedula, correo, rol, contraseña } = req.body;
  const usuario = new Usuario({
    nombre,
    apellido,
    cedula,
    correo,
    rol,
    contraseña,
  });

  const salt = bcryptjs.genSaltSync();
  usuario.contraseña = bcryptjs.hashSync(contraseña, salt);

  await usuario.save();
  res.json({
    msg: "post API - PostUsers",
    usuario,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - DeleteUsers",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - PatchUsers",
  });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
};
