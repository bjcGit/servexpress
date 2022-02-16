
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema ({
    nombre:{
        type: String,
        required: [true, 'El nombre es requerido'],
    },
    apellido:{
        type: String,
        required: [true, 'El apellido es requerido']
    },
    cedula:{
        type: String,
        required: [true, 'La cédula es requerida'],
        unique: true
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
        emun: ['ADMIN_ROLE', 'USER_ROLE', 'LIDER_ROLE']
    },
    estado:{
        type:Boolean,
        default: false
    },
    google:{
        type:Boolean,
        default: false
    }
});

UsuarioSchema.methods.toJSON = function (){
    const {__v, contraseña, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model ('Usuario', UsuarioSchema);
