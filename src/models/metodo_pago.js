import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { producto } from "./producto.js";
import { vendedor } from "./vendedor.js";
import { orden_de_compra } from "./ordenes_de_compra.js";

export const metodo_pago = sequelize.define('metodos_pago',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    metodop:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
},{
    timestamps: false
});

metodo_pago.hasMany(orden_de_compra, {
    foreignKey: "id_metodop",
     sourceKey: "id",
     });
     orden_de_compra.belongsTo(metodo_pago, { 
     foreignKey: "id_metodop", 
     targetId: "id" 
     });
