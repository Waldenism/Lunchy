var Orders = require('../models/orders');
var Users = require('../models/users');

const Order = {
    newOrder: (user, data, callback) => {

        if (!user) {
            console.log('not logged in');

        } else {

            let { _id, group } = user;
            let { value, restaurant } = data;

            let addItem = new Orders()
            addItem.userid = _id;
            addItem.group = group.id;
            addItem.item = value;
            addItem.restaurant = restaurant;
            addItem.balance = 10;
            addItem.paid = false;

            //save the user
            addItem.save(function(err) {
                if (err){
                    console.log('Error in Saving item: '+err);
                    throw err;
                }
                console.log("**** Item added to Database *****");
                console.log(addItem);

                callback(addItem);
            });
        }
    },

    getOrders: (id, callback) => {
        Orders.find({ 'group': id, 'paid': false }, function(err, res) {
            if (err) { console.log(err) };
            callback(res)
        })
    }
}


module.exports = Order;
