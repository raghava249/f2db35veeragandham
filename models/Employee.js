const mongoose = require("mongoose") 
const employeeSchema = mongoose.Schema({ 
    Employee_Name: {
        type: String,
        required:[true, "Name of the employee cannot be empty"]
    },
    Employee_Salary: {
        type: Number,
        required:[true,"Salaray of the Employee"]
    },
    Employee_Id : {
         type: Number,
         required:[true,"Id of the Employee"]
    },
    Employee_Department : {
         type: String,
        required:[true,"Department of the employee"]
    }
}) 
 
module.exports = mongoose.model("Employee", employeeSchema) 