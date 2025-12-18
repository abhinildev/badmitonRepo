import { DataTypes } from "sequelize";
import dbconnection from "../config/db.js";
import User from "./user.model.js";
import Coach from "./coaches.model.js";
import Equipment from "./equipment.model.js";
import PricingRule from "./pricingRules.js";
import TimeSlot from "./time_slots.js";
const Booking = dbconnection.define(
  "Booking",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    bookingDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    timeSlotId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "CONFIRMED", "CANCELLED"),
      defaultValue: "PENDING",
    },
  },
  {
    tableName: "bookings",
    timestamps: true,
  }
);

export default Booking;
