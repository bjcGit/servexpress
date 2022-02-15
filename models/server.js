
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {

    this.app = express();
    this.port = process.env.PORT;
    this.usersPatch = '/api/users';

    //Conectar a base de datos
    this.conectarDB();
 

    //Middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }

  async conectarDB(){
    await dbConnection();
    // await connection();
  }

  middlewares() {
    //Cors
    this.app.use(cors());

    //Json 
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPatch, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Iniciando por el puerto", this.port);
    });
  }
}

module.exports = Server;
