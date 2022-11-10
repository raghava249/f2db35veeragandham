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
exports.Employee_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id); 
}; 
 
// Handle Employee create on POST. 
exports.Employee_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee create POST'); 
}; 
 
// Handle Employee delete form on DELETE. 
exports.Employee_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id); 
}; 
 
// Handle Employee update form on PUT. 
exports.Employee_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id); 
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
    // {"Employee_Name":"Vidya", "Employee_Salary":100000, "Employee_Id": 67422,Employee_Department:"CEO"} 
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