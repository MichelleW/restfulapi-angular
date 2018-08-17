// ============ Various Helper Libraries ============ 
const path = require('path');
// ==================================================



// ============ Express ============ 
const express = require('express');
const app = express();
// =================================



// ============ Body Parser ============ 
// Will require: express/app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// =====================================



// ============ View Engine ============ 
// Will require: express/app
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// =====================================



// ============ Session ============ 
// Will require: express/app
// const session = require('express-session');
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 }
// }))
// =================================



// ============ Flash ============ 
// Will require: express/app, express-session
// const flash = require('express-flash');
// app.use(flash());
// ===============================



// ============ Mongoose ============ 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tasks")

const TaskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Title must exist.'], 
        minlength: [3, 'Length must be at least 3 characaters long.'] 
    },
    description: String,
    completed: { 
        type: Boolean, 
        default: false
    },
}, { timestamps: true });
const Task = mongoose.model('Task', TaskSchema);
// ==================================



// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "angular-app/dist/angular-app")));
// =======================================



// ============ Routes ============ 
// Will use: mongoose
app.get('/tasks', function (req, res) {
    console.log("app.get('/tasks', function (req, res) { ... })");
    Task.find({}, function(err, tasks){
        
        res.json(tasks);
        // res.json({tasks:tasks, message:'tasks returned'});
    })
})

app.post('/tasks', function (req, res) {
    console.log("app.post('/tasks', function (req, res) { req.body })", req.body);
    const taskInstance = new Task();
    taskInstance.title = req.body.title;
    taskInstance.description= req.body.description;
    taskInstance.save(function(err, data){
        console.log("taskInstance.save()", err);
        console.log("taskInstance.save()", data);
        if (err) {            
            res.json(err);
        } else {
            res.json(data);
        }  
    })
})

app.get('/tasks/:id', function(req, res){
    console.log("from get route: req.params.id",req.params.id)

    Task.findById(req.params.id, function(err, task){
        
        if(err){
            res.json(err);
        } else {
            
            res.json(task);
        }
    })
}) 


app.put('/tasks/:id', function(req, res) {
    console.log("SERVER > put widgets/id");
    console.log("SERVER > put widgets/id params.id", req.params.id);
    console.log("SERVER > put widgets/id body", req.body);
    Task.findById(req.params.id, function(err, task){
        console.log("SERVER > findbyid, err ", err)
        console.log("SERVER > findbyid, widget ", task)
        if(err){

        } else {
            console.log("widget found for update:", task);
            task.title = req.body.title;
            task.description = req.body.description;
            task.qty = req.body.qty;
            task.price = req.body.price;
            task.save(function(err){
                if(err){
                    res.json(err);
                } else {
                    res.json(true);
                 
                }
            })
        }
    })
})

app.delete("/tasks/:id", function(req, res){
    console.log("app.get('/tasks/:id/delete', function(req, res){ req.params.id });", req.params.id);
   
    Task.findOneAndDelete({_id: req.params.id}, function(err, result) {
       if(err){
           console.log('delete err :',  err);
       }else{
        console.log('result  :',  result);
        Task.find({}, function(err, tasks){
            res.json(tasks);
        })
       }
    })
})
// ==================================



// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================
