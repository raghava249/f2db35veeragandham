var express = require('express');
var router = express.Router();
const Employee_controlers = require('../controllers/Employee');
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/',Employee_controlers.Employee_view_all_Page);
/* GET detail Employee page */ 
router.get('/detail', Employee_controlers.Employee_view_one_Page); 
/* GET create Employee page */ 
router.get('/create', Employee_controlers.Employee_create_Page);
/* GET create update page */ 
router.get('/update',secured, Employee_controlers.Employee_update_Page);  
/* GET delete Employee page */ 
router.get('/delete', Employee_controlers.Employee_delete_Page); 
 

module.exports = router;