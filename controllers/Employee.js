var Employee = require('../models/Employee'); 
 
// List of all Employees 
exports.Employee_list = async function(req, res) { 
    try{ 
        theEmployees = await Employee.find(); 
        res.send(theEmployees); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Employee. 
// for a specific Costume. 
exports.Employee_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Employee.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
 
// Handle Employee create on POST. 
exports.Employee_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee create POST'); 
}; 
 
// Handle Employee delete form on DELETE. 
exports.Employee_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id); 
}; 
 
exports.Employee_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Employee.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Employee_Name)  
               toUpdate.Employee_Name = req.body.Employee_Name; 
        if(req.body.Employee_Salary) toUpdate.Employee_Salary = req.body.Employee_Salary; 
        if(req.body.Employee_Id) toUpdate.Employee_Id = req.body.Employee_Id; 
        if(req.body.Employee_Department) toUpdate.Employee_Department = req.body.Employee_Department; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 
// VIEWS 
// Handle a show all view 
exports.Employee_view_all_Page = async function(req, res) { 
    try{ 
        theEmployees = await Employee.find(); 
        res.render('Employee', { title: 'Employee Search Results', Emp_results: theEmployees }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.Employee_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Employee(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Employee_Name":"Vidya", "Employee_Salary":100000, "Employee_Id": 67422,"Employee_Department":"CEO"} 
    document.Employee_Name = req.body.Employee_Name; 
    document.Employee_Salary = req.body.Employee_Salary; 
    document.Employee_Id = req.body.Employee_Id; 
    document.Employee_Department = req.body.Employee_Department; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 