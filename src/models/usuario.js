import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { cupon_usuario } from "./cupones_usuario.js";
import { vendedor } from "./vendedor.js";

export const usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    nombre_usu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos_usu: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    timestamps: false,
  }
);

usuario.hasOne(cupon_usuario, {
  foreignKey: "id_usuario",
  sourceKey: "id",
  });
  cupon_usuario.belongsTo(usuario, { 
  foreignKey: "id_usuario", 
  targetId: "id" 
  });

  usuario.hasOne(vendedor, {
    foreignKey: "id_usuario",
    sourceKey: "id",
    });
    vendedor.belongsTo(usuario, { 
    foreignKey: "id_usuario", 
    targetId: "id" 
    });