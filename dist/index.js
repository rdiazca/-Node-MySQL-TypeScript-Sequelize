"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import MySQL from "./mysql/mysql";
//import router from "./router/router";
const server_1 = __importDefault(require("./models/server"));
const server = server_1.default.init(3000);
//server.app.use( router );
//MySQL.instance;
server.listen(() => {
    console.log(`Servidor corriendo en el puerto 3000`);
});
