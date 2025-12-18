import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import dbconnection from "./src/config/db.js";
import authRouter from "./src/router/auth.route.js";
import adminRouter from "./src/router/admin.router.js";
import bookingRouter from "./src/router/booking.route.js";
import pricingRouter from "./src/router/pricingRoutes.js";
import timeSlotRouter from "./src/router/timeSlotRoutes.js";

import "./src/model/associations.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 7000;

/* ---------------- middleware ---------------- */
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/bookings", bookingRouter);
app.use("/pricing", pricingRouter);
app.use("/timeslots", timeSlotRouter);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
  });
}


dbconnection
  .sync()
  .then(() => console.log("Neon is connected"))
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
