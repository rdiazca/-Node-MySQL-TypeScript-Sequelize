
import express = require('express');
import path = require('path');

export default class Server{
    public app: express.Application;
    public port: number;

    constructor(port: number){
        this.port = port;
        this.app = express();

    }

    listen( callback?: () => void){
        this.app.listen(this.port, callback);
        this.publicFolder();

    }
    static init(port: number){
        return new Server(port);
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

}
//const path = require('path');

//const app = express();

// const publicPath = path.resolve(__dirname, '../public');
// const port = process.env.PORT || 3000;

// app.use(express.static(publicPath));

// app.listen(port, (err) => {
//     if(err) throw new Error(err);
//     console.log(`Servidor corriendo en el puerto ${port}`);
// });