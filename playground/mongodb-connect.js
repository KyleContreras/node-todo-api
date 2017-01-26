// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// object destructuring lets you pull out properties from an object, creating vars


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server!');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo.', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Kyle Contreras',
    //     age: 28,
    //     location: 'Swartz Creek'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User.', err);
    //     }
    //     // result.ops is an array of all the documents that got inserted
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});