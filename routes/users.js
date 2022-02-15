const { Router } = require("express");
const { check } = require("express-validator");
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
} = require("../controllers/users");
const { validarCampos } = require("../middlewares/validar-campos");
const {rolValido, existeEmail, usuarioPorId} = require('../helpers/dbValidacion');

const router = Router();

router.get("/", usersGet);

router.put("/:id",[
  check('id', 'No es un id válido').isMongoId(),
  check('id').custom(usuarioPorId),
  check('rol').custom(rolValido),
  validarCampos
], usersPut);

router.post("/",[
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('apellido', 'El apellido es obligatorio').not().isEmpty(),
   check('cedula', 'La cedula es obligatoria').not().isEmpty(),
   check('contraseña', 'La contraseña debe de tener al menos 6 caracteres').isLength({min: 6}),
   check('correo').custom(existeEmail).isEmail(),
   check('rol').custom(rolValido),
   validarCampos
], usersPost);

router.delete("/", usersDelete);

router.patch("/", usersPatch);

module.exports = router;
