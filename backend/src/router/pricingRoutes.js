// routes/pricingRoutes.js
import express from "express";
import { calculatePrice } from "../Services/pricing/pricingEngine.js";

const router = express.Router();

router.post("/calculate", async (req, res) => {
  try {
    console.log("Pricing payload:", req.body); 

    const result = await calculatePrice(req.body);
    res.json(result);
  } catch (err) {
    console.error("Pricing error:", err);
    res.status(500).json({
      message: "Pricing failed",
      error: err.message,
    });
  }
});

export default router;
