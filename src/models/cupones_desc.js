import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { cupon_usuario } from "./cupones_usuario.js";
import { orden_de_compra } from "./ordenes_de_compra.js";
export const cupon_desc = sequelize.define('cupones_desc',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    descuento:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    dias_validez:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: true
    },
    codigo:{
        type:DataTypes.STRING,
        unique:true
    }
    
},{
    timestamps: false
});

cupon_desc.hasOne(cupon_usuario, {
    foreignKey: "id_usuario",
    sourceKey: "id",
    });
    cupon_usuario.belongsTo(cupon_desc, { 
    foreignKey: "id_cupon", 
    targetId: "id" 
    });

    cupon_desc.hasMany(orden_de_compra, {
        foreignKey: "id_cupon",
         sourceKey: "id",
         });
         orden_de_compra.belongsTo(cupon_desc, { 
         foreignKey: "id_cupon", 
         targetId: "id" 
         });
