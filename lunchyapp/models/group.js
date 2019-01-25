var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema ({
    groupname: String,
    adminid: String,
    datecreated:  {
        type: Date,
        default: Date.now
    }
});

var Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
