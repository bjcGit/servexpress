
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema ({
    nombre:{
        type: String,
        required: [true, 'El usuario es requerido']
    },
    correo:{
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true
    },
    contraseña:{
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    img:{
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type:Boolean,
        default: true
    },
    google:{
        type:Boolean,
        default: false
    }
});

module.exports = model ('Usuario', UsuarioSchema);
