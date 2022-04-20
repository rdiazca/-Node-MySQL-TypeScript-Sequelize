import { DataTypes } from 'sequelize';
import db from '../mysql/connection';


const Heroe = db.define('heroes', {
    nombre: {
        type: DataTypes.STRING
    },
    poder:{
        type: DataTypes.STRING
    },
   
});

export default Heroe;