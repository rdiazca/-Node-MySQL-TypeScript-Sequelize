"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    listen(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
    static init(port) {
        return new Server(port);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
}
exports.default = Server;
//const path = require('path');
//const app = express();
// const publicPath = path.resolve(__dirname, '../public');
// const port = process.env.PORT || 3000;
// app.use(express.static(publicPath));
// app.listen(port, (err) => {
//     if(err) throw new Error(err);
//     console.log(`Servidor corriendo en el puerto ${port}`);
// });
