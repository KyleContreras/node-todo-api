var express = require('express');
var bodyParser = require('body-parser');

// ES6 destructuring - creating a local variable called mongoose equal to the mongoose property on the object
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// Getting the body data that got sent from the client?
app.use(bodyParser.json());

// creating a new Todo
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});