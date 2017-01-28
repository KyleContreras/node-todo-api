const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '588d1acf6b12f9812020d2e5'}).then((todo) => {

// });

Todo.findByIdAndRemove('588d1acf6b12f9812020d2e5').then((todo) => {
    console.log(todo);
});