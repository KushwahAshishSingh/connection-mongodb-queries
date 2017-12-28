/*


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('error occurs');
  }
  console.log('Connected to mongodb server');

// the down line will make a collection inside the TodoApp/Todos..

// db.collection('Todos').insertOne({
//   text: 'something to do',
//   completed: false
// }, (err, res) => {
//   if(err){
//     return console.log('unable to insert', err);
//   }
//   console.log(JSON.stringify(res.ops, 2));
// // ops will store all of the document inserted...  and use filter
// // by (res.ops, undefined, 2)  undefined will work as a filter and
// //looking for the undefiened value
// });
db.collection('Users').insertOne({ // making new collection
  name: 'ashish',
  age: 24,
  location: 'jaipur'
}, (err, res) => {
  if(err){
    console.log('error in user coll',err);
  }
  console.log(JSON.stringify(res.ops));
});

// db.collection('Users').find{
//   name: 'ashish'
// }, (err, res) => {
//   if(err){
//     console.log('no ashish');
//   }
//   console.log(JSON.stringify(res.ops));
// });


  db.close();
});
*/
