import { DataTypes } from "sequelize";
import dbconnection from "../config/db.js";
import Coach from "./coaches.model.js";
import Equipment from "./equipment.model.js";
import Court from "./courts.model.js";
import Booking from "./bookings.model.js";
const BookingResource = dbconnection.define(
  "BookingResource",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    resourceType: {
      type: DataTypes.ENUM("COURT", "EQUIPMENT", "COACH"),
      allowNull: false,
    },
    resourceId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "booking_resources",
    timestamps: true,
  }
);

export default BookingResource;
