import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { producto } from "./producto.js";
import { ticket } from "./ticket.js";

export const orden_de_compra = sequelize.define(
  "ordenes_de_compra",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      a_domicilio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      clave_compra: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    timestamps: false,
  }
);

orden_de_compra.hasMany(ticket, {
  foreignKey: "id_compra",
   sourceKey: "id",
   });
   ticket.belongsTo(orden_de_compra, { 
   foreignKey: "id_compra", 
   targetId: "id" 
   });
