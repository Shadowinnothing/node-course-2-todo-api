//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*
  // Query everything in the database
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('All Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Documents', err);
  });
  */

  /*
  // Query all items with a completed value of false
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos where completed=false');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Documents', err);
  });
  */

  /*
  // Query by objectID
  db.collection('Todos').find({
    _id: new ObjectID('5ae134f0b7fa86029f77711d')
  }).toArray().then((docs) => {
    console.log('Todos by ObjectID');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Documents', err);
  });
  */

  /*
  // Query by count
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos Count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Documents', err);
  });
  */

  // Query users by name 'Ryan Haig'
  db.collection('Users').find({
    name: 'Ryan Haig'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error finding users');
  });

  db.close();
});
