import mysql = require('mysql');

export default class MySQL{
    private static _instance: MySQL;

    cnn: mysql.Connection;
    connected: boolean = false;

    constructor(){
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password:'rndc960604',
            database: 'node_db'
        });

       this.connectDB();
    }

    //Patrón Singleton
    public static get instance(){
        return this._instance || (this._instance = new this()); 
    }

    static ejecutarQuery(query: string, callback: Function){
        this.instance.cnn.query(query, (err, results: Object[], fields) =>{
            if(err){
                console.log('Error in query');
                console.log(err);
                return callback(err);
            }

            if(results.length === 0){
                callback('The register solicite not found');
            }else{
                callback(null, results);
            }

            
        });
    }
    private connectDB(){
        this.cnn.connect( (err: mysql.MysqlError) =>{
            if( err ) {
                console.log(err.message);
                return;
            } 

            this.connected = true;
            console.log('Data base online');
        });
    }
}

//var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();