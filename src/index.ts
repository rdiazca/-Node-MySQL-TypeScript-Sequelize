//import MySQL from "./mysql/mysql";
//import router from "./router/router";
import Server from "./models/server";

const server = Server.init(3000);
//server.app.use( router );

//MySQL.instance;
server.listen( () =>{
    console.log(`Servidor corriendo en el puerto 3000`);
});