//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ae3785f2d745defda97759a')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  */

  //challange: find user Nikola Jokic and update name to Ryan Haig
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae37f432d745defda9776da')
  }, {
    $set:{
      name: 'Nikola Jokic'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  })

  //db.close();
});
