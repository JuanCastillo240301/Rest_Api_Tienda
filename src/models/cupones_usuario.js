import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { usuario } from "./usuario.js";

export const cupon_usuario = sequelize.define('cupones_usuario',{
    canjeado:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: false
    },    id_usuario: {
        type: DataTypes.INTEGER,
        
      },
    id_cupon: {
        type: DataTypes.INTEGER,
      },
    
},{
    timestamps: false
});

