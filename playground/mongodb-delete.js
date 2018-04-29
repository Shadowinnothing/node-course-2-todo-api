//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*
  // delete many
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  */

  /*
  // delete one
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  */

  /*
  // find one and delete
  db.collection('Todos').findOneAndDelete({
    completed: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  */

  // challange: delete all ryan haig users and delete a user by ID
  /*
  db.collection('Users').deleteMany({name: 'Ryan Haig'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  */
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5ae13dadca6401047fb32d1e')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  //db.close();
});
