var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Employee = require("./models/Employee"); 

require('dotenv').config(); 
const connectionString =  process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")
});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var EmployeeRouter = require('./routes/Employee');
var gridbulidRouter = require('./routes/gridbulid');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Employee',EmployeeRouter);
app.use('/gridbulid',gridbulidRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await Employee.deleteMany(); 
 
  let instance1 = new 
  Employee({
    Employee_Name: "Chowdary",
    Employee_Salary:100000,
    Employee_Id : 56725,
    Employee_Department :"Management"
  }); 
  let instance2 = new 
  Employee({
    Employee_Name: "Nikhil",
    Employee_Salary: 50000,
    Employee_Id : 25431,
    Employee_Department : "Testing"
  }); 
  let instance3 = new 
  Employee({
    Employee_Name: "Gowtham",
    Employee_Salary:120000,
    Employee_Id : 57247,
    Employee_Department :"Cloud API"
  }); 
  instance1.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("First Employee object saved") 
  });
  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("Second Employee object saved") 
  });
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third Employee object saved") 
  }); 
} 
 
let reseed = true; 
if (reseed) { 
  recreateDB();
} 

module.exports = app;
