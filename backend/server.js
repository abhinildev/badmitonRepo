import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbconnection from "./src/config/db.js"
import authRouter from "./src/router/auth.route.js";
import adminRouter from "./src/router/admin.router.js";
import bookingRouter from "./src/router/booking.route.js";
import pricingRouter from "./src/router/pricingRoutes.js";
import timeSlotRouter from "./src/router/timeSlotRoutes.js";
import TimeSlot from "./src/model/time_slots.js"
//import bookingRouter from "./src/router/booking.route.js"
import path from "path"
import "./src/model/associations.js"
import { fileURLToPath } from "url";
const app =express()
dotenv.config()

const port=process.env.PORT;
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}
//routes

app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/bookings", bookingRouter);
app.use("/pricing", pricingRouter);
app.use("/timeslots", timeSlotRouter);
dbconnection
    .sync({alter:true})
    .then(()=>console.log("Neon is connected"))
    .catch((err)=>console.error("DB connection error"))
app.listen(port ,()=>{
    console.log("Server is running on port: "+port)
})