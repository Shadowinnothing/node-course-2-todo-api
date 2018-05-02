const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

let id = '5ae66b0db03419761e1f5580';
let userId = '5ae3b7fc7a2d60dc5279f48f';

/*
if(!ObjectID.isValid(id)){
  console.log('ID is not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by Id: ', todo);
}).catch((err) => {
  console.log(err);
});
*/

//challange: querry user collection
//load in user ID models
//user.findById
//handle 3 cases: querry works but no user, user was found(print user), handle errors
User.findById({
  _id: userId
}).then((user) => {
  if(!user){
    return console.log('Could not find user');
  }
  console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((err) => {
  console.log(err);
});
