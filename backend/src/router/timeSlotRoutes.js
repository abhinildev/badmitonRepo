// routes/timeSlotRoutes.js
import express from "express";
import TimeSlot from "../model/time_slots.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const slots = await TimeSlot.findAll();
  res.json(slots);
});

export default router;
