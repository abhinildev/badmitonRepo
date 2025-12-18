import express, { Router } from "express";
import { bookCourt, getMyBookings } from "../controller/bookingController.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router=express.Router()

router.post("/book",authMiddleware,bookCourt)
router.get("/my",authMiddleware,getMyBookings)
export default router