import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { producto } from "./producto.js";
import { vendedor } from "./vendedor.js";

export const categoria_p = sequelize.define('categorias_p',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
},{
    timestamps: false
});

categoria_p.hasMany(producto, {
   foreignKey: "id_categoria",
    sourceKey: "id",
    });
    producto.belongsTo(categoria_p, { 
    foreignKey: "id_categoria", 
    targetId: "id" 
    });
