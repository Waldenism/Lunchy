'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    name: {
        first: String,
        last: String
    },
    group: {
        id: String,
        name: String,
        admin: Boolean
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
//# sourceMappingURL=users.js.map