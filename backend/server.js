import express from "express"
import dotenv from "dotenv"
import dbconnection from "./src/config/db.js"
import authRouter from "./src/router/auth.route.js"
import bookRouter from "./src/router/booking.route.js"
const app =express()
dotenv.config()

const port=process.env.PORT;
app.use(express.json())
//routes
app.use("/auth",authRouter)
app.use("/getBooking",bookRouter)
dbconnection
    .sync({alter:true})
    .then(()=>console.log("Neon is connected"))
    .catch((err)=>console.error("DB connection error"))
app.listen(port ,()=>{
    console.log("Server is running on port: "+port)
})