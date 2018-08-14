// ### to check: ###
// #####################
// servers need to be running:

// - mongod server running
// - nodemon server.js
// - ng build --watch

// notes: 
// Step 1. this command generates a data.service.ts file
// ng generate service data 

// Step 2. import DataService into app.module.ts, add to  providers:
//import {DataService} from './data.service'; 

// Step3. make sure app is injecting  (dependenciy injection)


// require express
var express = require("express");
// create the express app
var app = express();

// path module -- try to figure out where and why we use this
var path = require("path");

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/restful_Task_API');

var TaskSchema = new mongoose.Schema({
  title: {type: String,required: true},
  description: {type: String,default: ""},
  completed: {type: Boolean,default: false},}, {timestamps: true});


//  ### setting schema in Model

// setting schema and getting schema by storing it in var Task
var Task = mongoose.model('Tasks', TaskSchema);




// static content chelley
app.use(express.static(path.join(__dirname,"mish-project/dist/mish-project")));

app.post('/tasks', function (req, res) {
  console.log('post data',req.body);
  Task.create(req.body,function(err,task){
    if(err){
      console.log(err);
      //send back an object, add a message stat
      res.json({message:false, error:err})
    }else{
     res.json({message:true, data:task})
    }
  })
 })


app.put('/tasks/:id',function(req,res){
  console.log('put data',req.params.id, req.body);
  
  let id = req.params.id;
  
  Task.findById(id, function(err,task){
    if(err){
      console.log('err',err);
      res.json({message:false,error:err})
    }else{
      task.title = req.body.title;
      task.description = req.body.description;
      task.completed = req.body.completed;
      task.save(function(err){
        if(err){
          console.log('err',err);
          res.json({message:false,error:err})
        }else{

          res.json({message:true,data:task})
        }
      })

    }
  })

})

app.delete('/tasks/:id',function(req,res){
  console.log('delete route',req.params.id);
  Task.remove({_id: req.param.id},function(err,task){
    if(err){
      console.log(err);
      res.json({message:false, error:err})
    }else{
     res.json({message:true, data:task})
    }
  })
  
})
 
app.get('/tasks',function(req,res){
  Task.find({},function(err,task){
    if(err){
      console.log(err);
      res.json({message:false, error:err})
    }else{
     res.json({message:true, data:task})
    }
  })
})

app.get('/tasks/:id',function(req,res){
  
  Task.find({_id:req.params.id},function(err,data){
    if(err){
      console.log('err',err);
      res.json({message:false,error:err})
    }else{
      res.json({message:true,data:data})
    }
  })
})


// tell the express app to listen on port 8000
app.listen(8000, function () {
  console.log("listening on port 8000");
});