const mongoose = require("mongoose");
// const mysql = require("mysql");

const dbConnection = async () => {
  try {
   await mongoose.connect(process.env.MONGODB, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      
  }, () => { 
      console.log('Conectado') 
  })
    
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

// const connection = async () => {
//   try {
//     await mysql.createConnection({
//       host: process.env.HOST,
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//       database: process.env.DATABASE,
//     });
//     console.log("DB Connect");
//   } catch (error) {
//     console.log("Revisar el metodo de conexion");
//   }
// };

module.exports = {
  dbConnection,
  // connection
};
