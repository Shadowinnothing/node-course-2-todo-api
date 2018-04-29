var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

// For creating new Todo
app.post('/todos', (request, response) => {
  var todo = new Todo({
    text: request.body.text
  });

  todo.save().then((doc) => {
    response.send(doc);
    console.log(`Uploaded to Server: ${doc.text}`);
  }, (err) => {
    response.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
