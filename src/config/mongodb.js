import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();


const uri = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`;

const connection = mongoose.connect(uri)
    .then(() => {
        console.log("Successful connection to the database.");
    })
    .catch((error) => {
        console.error("Error connecting to the database.");
        console.error(error);
        throw error;
    });
    /* const db = mongoose.createConnection(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      db.on('error', (error) => {
        console.error('222Error connecting to the database:', error);
        throw error;
      });
      
      db.once('open', async () => {
        console.log('222Successful connection to the database.');
      
        // Crear un usuario de ejemplo con password hasheado
        const saltRounds = 10; // Número de rondas de hashing
        const plainPassword = "yourPlainTextPassword"; // Contraseña en texto plano
      
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      
        // Crear el usuario con la contraseña hasheada
        const user = new UserModel({
          email: "john.doe@example.com",
          password: hashedPassword,
        });
      
        // Guardar el usuario en la base de datos
        try {
          await user.save();
          console.log("Usuario creado exitosamente.");
        } catch (error) {
          console.error("Error al guardar el usuario:", error);
        } finally {
          // Cerrar la conexión a la base de datos después de guardar el usuario
          db.close();
        }
      }); */
export default connection;
