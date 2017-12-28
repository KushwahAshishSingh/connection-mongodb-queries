//// >>>>>> REF >>>>  mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html#count



const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
  return console.log('unable to connect to mongodb server');
}
console.log('connected to server');

       // this will fetch every thing in the collection  //
// >>> db.collection('Todos').find().toArray().then((docs)=> <<<{   /////////


      // this will return only the completed valses as false
// >>> db.collection('Todos').find({completed: false}).toArray().then((docs) =>{


     // for find the count
// >>> db.collection('Todos').find().count().then((count) =>{
// >>> console.log(`todos count ${count}`); });






     // for finding records by id //  imp  use underscore id i.e. "_id"
     db.collection('Todos').find({
        _id: new ObjectId('5a44a55cd1035103fd5ce9c0'), completed: true
            }).toArray().then((docs) => {


  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('unable to fetch',err);
});

db.collection('Users').find({name:'Ashish'}).toArray().then((res) => {
      console.log(JSON.stringify(res, undefined, 2));
  });

//  db.close();
});
