const { response, request } = require("express");

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

const usersPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - PutUsersr",
    id,
  });
};

const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - PostUsers",
    nombre,
    edad,
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
