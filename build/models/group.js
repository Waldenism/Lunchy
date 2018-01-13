'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    groupname: String,
    adminid: String,
    datecreated: {
        type: Date,
        default: Date.now
    },
    groupbalance: Number,
    paid: Boolean
});

var Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
//# sourceMappingURL=group.js.map