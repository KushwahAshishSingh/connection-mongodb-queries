// >>>>  manually adding validating and saving data in local database
var express = require('express');
var bodyParser = require('body-parser');  // install BodyParser



var {mongoose} = require('./PostManServices/WorkingWithPostMan');  // extracting conn properties from the specified folder
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');
var {Student} = require('./models/Student');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
var todo = new Todo({
  text: req.body.text
});
todo.save().then((doc) => {
res.send(doc);                  // send response
}, (e) => {
  res.status(400).send(e);
  //console.log('error');
});
});

//app.use(bodyParser.json());
app.post('/StudentDetails', (req, res) => {
  var student = new Student({
    Name: req.body.Name,
    class: req.body.class,
    email: req.body.email,
    Address: req.body.Address
  });
  student.save().then((result) => {
    res.send(result);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('started on port 3000');
})

//var mongoose = require('mongoose');

// // process of connecting to mongoose to db
// mongoose.Promise = global.Promise;    // set them once in the project.
// mongoose.connect('mongodb://localhost:27017/ToDoApp');
//
// //make a model
// var Mobile = mongoose.model('Model', {
//   MobileType: { type: String,
//     require: true,  minlength: 1, trim: true },     // validaters
//   model: { type: String },
//   price: {type: Number ,  default: null},           // validaters default
//
//   });
//
// // insert the values
// var MobileDetails = new Mobile({
//   MobileType: 'moto',
//   model: 'E Series',
//   price: 32222
// });
//
//
// // save the data in the  model
// MobileDetails.save().then((res) => {
//   console.log(res);
// }, (e) => {
//   console.log('unable to connect');
// });

// var User = mongoose.model('User', {
//   email: {
//     type: String, trim: true, require: true, minlength: 1
//   }
// });
// var UserDetails = new User({
//   email: "ashish@gmail.com"
// });
//
// UserDetails.save().then((res) =>
// {
//   console.log(res);
// });


// mongoose validaters...  mongoose schemas  >>>   require: true ,  minlength: 1,  trim: true <<<<
