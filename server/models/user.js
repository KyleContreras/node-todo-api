const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]   
});
// determine what is sent back when a mongoose model is converted into a JSON value
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);    
};

UserSchema.methods.generateAuthToken = function () {
    // instance methods get called with the individual document
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});
    // in order to allow server.js to chain onto the promise, return user.save.then
    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {
    // model methods get called with the model as the this binding
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch(e) {
        return new Promise((resolve, reject) => {
            reject();
        });
    }

    // try success case
    return User.findOne({
       '_id': decoded._id,
       'tokens.token': token,
       'tokens.access': 'auth' 
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};