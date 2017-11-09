let mongoose = require('mongoose');

let User = mongoose.model('User', {
    userName: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    },
    email: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    }
});

module.exports = {User};