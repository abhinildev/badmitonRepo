import Coach from "../model/coaches.model.js";
import Equipment from "../model/equipment.model.js";
import Court from "../model/courts.model.js";
import PricingRule from "../model/pricingRules.js";
import TimeSlot from "../model/time_slots.js";
export async function seedData() {
  await Court.bulkCreate([
    { courtType: "indoor", basePrice: 500 },
    { courtType: "indoor", basePrice: 500 },
    { courtType: "outdoor", basePrice: 300 },
    { courtType: "outdoor", basePrice: 300 },
  ]);

  await Equipment.bulkCreate([
    { name: "Racket", totalQuantity: 10, pricePerSlot: 100 },
    { name: "Shoes", totalQuantity: 5, pricePerSlot: 150 },
  ]);

  await Coach.bulkCreate([
    { name: "Coach A", pricePerSlot: 300 },
    { name: "Coach B", pricePerSlot: 250 },
    { name: "Coach C", pricePerSlot: 200 },
  ]);

  await PricingRule.bulkCreate([
    {
      name: "Peak Hours",
      resourceType: "BOOKING",
      conditionType: "TIME_RANGE",
      conditionValue: "18:00-21:00",
      modifierType: "PERCENTAGE",
      modifierValue: 20,
    },
    {
      name: "Weekend",
      resourceType: "BOOKING",
      conditionType: "DAY_OF_WEEK",
      conditionValue: "SAT,SUN",
      modifierType: "PERCENTAGE",
      modifierValue: 15,
    },
    {
      name: "Indoor Premium",
      resourceType: "COURT",
      conditionType: "COURT_TYPE",
      conditionValue: "indoor",
      modifierType: "FLAT",
      modifierValue: 100,
    },
  ]);

  await TimeSlot.bulkCreate([
    { startTime: "06:00", endTime: "07:00" },
    { startTime: "07:00", endTime: "08:00" },
    { startTime: "18:00", endTime: "19:00" },
    { startTime: "19:00", endTime: "20:00" },
  ]);

  console.log("Seed data inserted");
}