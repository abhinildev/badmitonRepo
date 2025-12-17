import express, { Router } from "express";
import { bookCourt } from "../controller/bookingController.js";

const app=express.Router()

app.post("/book",bookCourt)

export default Router