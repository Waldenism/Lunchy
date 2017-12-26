var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema ({
    groupid: Number,
    groupname: String,
    adminid: Number,
    datecreated:  {
        type: Date,
        default: Date.now
    },
    groupbalance: Number,
    paid: Boolean
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
