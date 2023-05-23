import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ticket } from "./ticket.js";
import { orden_de_compra } from "./ordenes_de_compra.js";


export const producto = sequelize.define(
  "productos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    nombre_p: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    timestamps: false,
  }
);

producto.hasMany(ticket, {
  foreignKey: "id_producto",
   sourceKey: "id",
   });
   ticket.belongsTo(producto, { 
   foreignKey: "id_producto", 
   targetId: "id" 
   });

   producto.hasMany(orden_de_compra, {
    foreignKey: "id_producto",
     sourceKey: "id",
     });
     orden_de_compra.belongsTo(producto, { 
     foreignKey: "id_producto", 
     targetId: "id" 
     });