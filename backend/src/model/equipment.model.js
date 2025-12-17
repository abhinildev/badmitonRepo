import { DataTypes } from "sequelize";
import dbconnection from "../config/db.js";

const Equipment = dbconnection.define(
  "Equipment",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pricePerSlot: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "equipment",
    timestamps: true,
  }
);

export default Equipment;
