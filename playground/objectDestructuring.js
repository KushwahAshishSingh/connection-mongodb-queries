/*   Object destructuring = its an ES6 feature.

   to pull out properties from an object and it a variable

   var user = {name: 'ashish', age: 24};

   var {name} = user;   // destructure the name object..
                        // pulling out the name property.
                        // creating a new name variable and
                        // setting it the name properties.

  console.log(name);



  ///////////////////
 IMP

 cosnt {MongoClient, ObjectId} = require('mongodb'); // taking 2 prop from mongodb

 var obj = new ObjectId();

 console.log(obj);
