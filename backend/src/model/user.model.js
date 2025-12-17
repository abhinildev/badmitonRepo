import { DataTypes,Model } from "sequelize";
import dbconnection from "../config/db.js";

class User extends Model{}

User.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey: true,
        },
        name:{ type:DataTypes.STRING,allowNull:false},
        email:{ type:DataTypes.STRING, allowNull:false, unique:true},
        password:{type: DataTypes.STRING,allowNull:false}
    },
    {
        sequelize:dbconnection,
        modelName:"user",
        tableName:"users",
        timestamps:true,
    }
)
export default User;