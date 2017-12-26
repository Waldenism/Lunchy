var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema ({
    userid: Number,
    order: Number,
    group: Number
    date:  {
        type: Date,
        default: Date.now
    },
    restaurant: Number,
    balance: Number,
    paid: Boolean
});

var Orders = mongoose.model('Orders', OrderSchema);

module.exports = Orders;
