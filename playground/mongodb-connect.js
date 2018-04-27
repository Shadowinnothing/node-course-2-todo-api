//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/*
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert Todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
*/

// insert new doc into Users (name, age, location)

/*
db.collection('Users').insertOne({
  name: 'Ryan Haig',
  age: 22,
  location: 'Denver'
}, (err, result) => {
  if(err){
    return console.log('Unable to insert User', err);
  }

  console.log(JSON.stringify(result.ops, undefined, 2));
  console.log(result.ops[0]._id.getTimestamp());
});
*/

  db.close();
});
