var express = require('express');
var bodyParser = require('body-parser');
var{ObjectID} = require('mongodb');

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        // pass in an object instead of an array for more flexibility later on
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    }); 
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};