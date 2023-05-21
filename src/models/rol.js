import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { usuario } from "./usuario.js";

export const rol = sequelize.define('roles',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    nombre_rol:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
},{
    timestamps: false
});

rol.hasMany(usuario, {
    foreignKey: "id_rol",
    sourceKey: "id",
    });
usuario.belongsTo(rol, { 
    foreignKey: "id_rol", 
    targetId: "id" 
    });