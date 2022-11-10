var express = require('express');
var router = express.Router();
const Employee_controlers = require('../controllers/Employee');
/* GET home page. */
router.get('/',Employee_controlers.Employee_view_all_Page);

module.exports = router;