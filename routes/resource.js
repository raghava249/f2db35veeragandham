var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Employee_controller = require('../controllers/Employee'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// EMPLOYEE ROUTES /// 
 
// POST request for creating a Employee.  
router.post('/Employee', Employee_controller.Employee_create_post); 
 
// DELETE request to delete Employee. 
router.delete('/Employee/:id', Employee_controller.Employee_delete); 
 
// PUT request to update Employee. 
router.put('/Employee/:id', Employee_controller.Employee_update_put); 
 
// GET request for one Employee. 
router.get('/Employee/:id', Employee_controller.Employee_detail); 
 
// GET request for list of all Employee items. 
router.get('/Employee', Employee_controller.Employee_list); 
 
module.exports = router; 
 