import { DataTypes } from "sequelize";
import dbconnection from "../config/db.js";
import Booking from "./bookings.model.js";

const Court = dbconnection.define(
  "Court",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    courtType: {
      type: DataTypes.ENUM("indoor", "outdoor"),
      allowNull: false,
    },
    basePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "courts",
    timestamps: true,
  }
);

export default Court;
