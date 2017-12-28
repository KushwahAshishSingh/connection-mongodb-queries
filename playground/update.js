//// >>>>>> REF >>>>  mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html#findOneAndUpdate


const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
  return console.log('unable to connect to mongodb server');
}
console.log('connected to server');

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectId('5a44a55cd1035103fd5ce9c0')   // filter id
}, {                                              // mongodb update documentation
  $set: {                                         // setting value
    completed: true
  }
}, {
  returnOriginal: false                           // will return the original nt the updated so make it as false.
}).then((result) => {
  console.log(result);
});



db.collection('Users').findOneAndUpdate({
  _id: new ObjectId('5a44ad31d4644c04df624f32')
}, {
  $set: {
    name: 'AshishSingh'
},
      $inc: {
         age: -2
      }
    },
   {
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   });


});
