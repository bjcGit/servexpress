
const {Schema, model} = require('mongoose');

const RoleSchema = Schema ({
    rol: {
        type: String,
        required: [true, 'Es requerido el rol']
    }
});

module.exports = model('Role', RoleSchema);