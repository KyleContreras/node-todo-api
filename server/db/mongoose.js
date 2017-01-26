var mongoose = require('mongoose');

// configure mongoose and connect it to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};