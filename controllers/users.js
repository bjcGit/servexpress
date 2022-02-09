const { response } = require('express')


const usersGet = (req, res = response) => {
    res.json({
      msg: "get API - controller",
    });
  }


  const usersPut = (req, res = response) => {

    const{ id } = req.params;

    res.json({
      msg: "get API - controller",
      id
    });
  }


  const usersPost = (req, res = response) => {

    const {name, edad} = req.body

    res.json({
      msg: "get API - controller",
      name,
      edad
    });
  }


  const usersDelete = (req, res = response) => {
    res.json({
      msg: "get API - controller",
    });
  }


  const usersPatch = (req, res = response) => {
    res.json({
      msg: "get API - controller",
    });
  }

  module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
  }