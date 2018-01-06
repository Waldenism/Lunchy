var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    userid: Number,
    username: String,
    password: String,
    group:  {
        name: String,
        admin: Boolean
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
