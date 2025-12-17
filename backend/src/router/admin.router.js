import express from "express";
import {
  createCourt,
  getCourts,
  updateCourt,
  disableCourt
} from "../controller/crud/courtController.js";

import {
  createEquipment,
  getEquipment,
  updateEquipment
} from "../controller/crud/equipmentController.js";

import {
  createCoach,
  getCoaches,
  updateCoach,
  disableCoach
} from "../controller/crud/coachController.js";

import {
  createRule,
  getRules,
  updateRule,
  toggleRule
} from "../controller/crud/pricingRule.js";

const router = express.Router();

/* Courts */
router.post("/courts", createCourt);
router.get("/courts", getCourts);
router.put("/courts/:id", updateCourt);
router.patch("/courts/:id/disable", disableCourt);

/* Equipment */
router.post("/equipment", createEquipment);
router.get("/equipment", getEquipment);
router.put("/equipment/:id", updateEquipment);

/* Coaches */
router.post("/coaches", createCoach);
router.get("/coaches", getCoaches);
router.put("/coaches/:id", updateCoach);
router.patch("/coaches/:id/disable", disableCoach);

/* Pricing Rules */
router.post("/pricing-rules", createRule);
router.get("/pricing-rules", getRules);
router.put("/pricing-rules/:id", updateRule);
router.patch("/pricing-rules/:id/toggle", toggleRule);

export default router;
