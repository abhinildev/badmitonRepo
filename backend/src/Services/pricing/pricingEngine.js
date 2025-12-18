import Court from "../../model/courts.model.js";
import Equipment from "../../model/equipment.model.js";
import Coach from "../../model/coaches.model.js";
import PricingRule from "../../model/pricingRules.js";
import TimeSlot from "../../model/time_slots.js";

export async function calculatePrice(payload) {
  const {
    bookingDate,
    courtId,
    timeSlotId,
    equipments = [],
    coachId,
  } = payload;

  if (!bookingDate || !courtId || !timeSlotId) {
    throw new Error("Missing required booking data");
  }

  const court = await Court.findByPk(courtId);
  if (!court) throw new Error("Court not found");

  const slot = await TimeSlot.findByPk(timeSlotId);
  if (!slot) throw new Error("Time slot not found");

  let total = court.basePrice;
  const breakdown = [
    { label: "Base Court Price", amount: court.basePrice },
  ];

  // 🔹 Apply pricing rules
  const rules = await PricingRule.findAll({ where: { isActive: true } });

  for (const rule of rules) {
    let applies = false;

    if (rule.conditionType === "COURT_TYPE") {
      applies = rule.conditionValue === court.courtType;
    }

    if (rule.conditionType === "DAY_OF_WEEK") {
      const day = new Date(bookingDate).toLocaleString("en-US", {
        weekday: "short",
      }).toUpperCase();
      applies = rule.conditionValue.split(",").includes(day);
    }

    if (rule.conditionType === "TIME_RANGE") {
      const [start, end] = rule.conditionValue.split("-");
      applies =
        slot.startTime >= start && slot.endTime <= end;
    }

    if (applies) {
      let add = 0;
      if (rule.modifierType === "PERCENTAGE") {
        add = (total * rule.modifierValue) / 100;
      } else {
        add = rule.modifierValue;
      }
      total += add;
      breakdown.push({ label: rule.name, amount: add });
    }
  }

  // 🔹 Equipment
  for (const eqId of equipments) {
    const eq = await Equipment.findByPk(eqId);
    if (eq) {
      total += eq.pricePerSlot;
      breakdown.push({
        label: eq.name,
        amount: eq.pricePerSlot,
      });
    }
  }

  // 🔹 Coach
  if (coachId) {
    const coach = await Coach.findByPk(coachId);
    if (coach) {
      total += coach.pricePerSlot;
      breakdown.push({
        label: "Coach Fee",
        amount: coach.pricePerSlot,
      });
    }
  }

  return {
    totalPrice: total,
    breakdown,
  };
}
