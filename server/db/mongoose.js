var mongoose = require('mongoose');

// configure mongoose and connect it to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};