const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

/*
Todo.remove({}).then((result) => {
  console.log(result);
});
*/

//Todo.findOneAndRemove({}).then((result) => {});
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5aef628a0dda413776aff646').then((todo) => {
  console.log(todo);
});
