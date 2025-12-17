import { DataTypes } from "sequelize";
import dbconnection from "../config/db.js";

const Coach = dbconnection.define(
  "Coach",
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
    pricePerSlot: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "coaches",
    timestamps: true,
  }
);

export default Coach;
