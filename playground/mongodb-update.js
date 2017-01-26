// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server!');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('588a252f86b36fabfb2fa9d0')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58895930153f53094a9ca5d2')
    }, {
        $set: {
            name: 'Kyle'
        },
        $inc: {
            age: +1
        },
    }, { 
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});