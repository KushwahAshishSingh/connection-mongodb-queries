
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
  return console.log('unable to connect to mongodb server');
}
console.log('connected to server');


 // delete many
    //db.collection('Todos').deleteMany({text: 'something to do'}).then((result) => {
   //   console.log(result);
  // })

// deleteOne
  //  db.collection('Todos').deleteOne({text: 'ankit'}).then((result) => {
  //  console.log(result);
  //  })

// findOneAndDelete
   // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   // console.log(result);
   // })

   db.collection('Users').findOneAndDelete({
     _id: new ObjectId("5a44a829fa9c34044b2fc864")
   }).then((result)  => { console.log(JSON.stringify(result, undefined, 2));
 });


});
