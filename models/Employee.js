const mongoose = require("mongoose") 
const employeeSchema = mongoose.Schema({ 
    Employee_Name: String,
    Employee_Salary:Number,
    Employee_Id : Number,
    Employee_Department :String
}) 
 
module.exports = mongoose.model("Employee", employeeSchema) 