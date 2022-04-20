
import express = require('express');
import path = require('path');
import db from '../mysql/connection';
import heroesRoutes from '../routes/heroe';

export default class Server{
    public app: express.Application;
    public port: number;
    public apiPaths = {
        heroes: '/api/heroes'
    }

    constructor(port: number){
        this.port = port;
        this.app = express();
        this.dbConnection();
        this.middlewares();
        this.routes();
       
        
    }

    async dbConnection(){
        try{
        await db.authenticate();
        console.log('Conectado');
    }
         catch (error: any) {
            throw new Error(error);
         }
    }

    routes(){
        this.app.use(this.apiPaths.heroes, heroesRoutes);
    }
    middlewares(){
        this.app.use(express.json());
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