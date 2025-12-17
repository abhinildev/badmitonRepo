import dbconnection from "../config/db.js";
import { DataTypes } from "sequelize";

const PricingRule = dbconnection.define(
  "PricingRule",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    resourceType: {
      type: DataTypes.ENUM("BOOKING", "COURT", "EQUIPMENT", "COACH"),
      allowNull: false,
    },

    conditionType: {
      type: DataTypes.ENUM(
        "TIME_RANGE",
        "DAY_OF_WEEK",
        "COURT_TYPE"
      ),
      allowNull: false,
    },

    conditionValue: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    modifierType: {
      type: DataTypes.ENUM("PERCENTAGE", "FLAT"),
      allowNull: false,
    },

    modifierValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "pricing_rules",
    timestamps: true,
  }
);

export default PricingRule;
