var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema ({
    userid: String,
    order: Number,
    group: String,
    date:  {
        type: Date,
        default: Date.now
    },
    item: String,
    restaurant: String,
    balance: Number,
    paid: Boolean
});

var Orders = mongoose.model('Orders', OrderSchema);

module.exports = Orders;
