import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { usuario } from "./usuario.js";

export const ticket = sequelize.define('tickets',{
    
    cantidadp: {
        type: DataTypes.INTEGER,
      },
      precioxcantidad: {
        type: DataTypes.FLOAT,
      },
    
},{
    timestamps: false
});

