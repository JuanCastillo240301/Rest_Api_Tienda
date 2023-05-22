import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { producto } from "./producto.js";

export const vendedor = sequelize.define(
  "vendedores",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    curp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ine: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cuenta_banco: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    timestamps: false,
  }
);

vendedor.hasMany(producto, {
  foreignKey: "id_vendedor",
   sourceKey: "id",
   });
   producto.belongsTo(vendedor, { 
   foreignKey: "id_vendedor", 
   targetId: "id" 
   });