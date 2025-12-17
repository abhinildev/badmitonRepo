import { DataTypes } from "sequelize";
import dbconnection from "../config/db.js";

const TimeSlot = dbconnection.define(
  "TimeSlot",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "time_slots",
    timestamps: true,
  }
);

export default TimeSlot;
