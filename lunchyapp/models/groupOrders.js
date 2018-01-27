var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupOrderSchema = new Schema ({
    adminid: String,
    groupid: String,
    date:  {
        type: Date,
        default: Date.now
    }
    restaurant: String,
    orders: {String}
});

var groupOrder = mongoose.model('groupOrder', groupOrderSchema);

module.exports = groupOrder;
