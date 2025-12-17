import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()
const dburi=process.env.DB_URI

const dbconnection= new Sequelize(dburi,{
    dialect:"postgres",
    protocol:"postgres",
    logging:false,
})
export default dbconnection