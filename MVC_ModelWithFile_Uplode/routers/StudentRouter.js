const express=require('express')
const app=express();
 const StudentController=require('../controller/StudentController');
 const upload=require('../Middelware/FileUplode')
const student = require('../model/StudentModel');
app.post('/',upload.single("std_profile"),StudentController.store)
 app.get('/',StudentController.index)
//  app.post('/',StudentController.store)
 app.get('/:id',StudentController.single)
 app.delete('/:id',StudentController.trash)
 module.exports=app;