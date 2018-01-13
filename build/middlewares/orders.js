'use strict';

var Orders = require('../models/orders');
var Users = require('../models/users');

var Order = {
    newOrder: function newOrder(user, callback) {
        var userid = user.userid,
            groupid = user.groupid,
            theOrder = user.theOrder,
            restaurant = user.restaurant;


        if (!userid) {
            console.log('not logged in');
        } else {

            var addItem = new Orders();
            addItem.userid = userid;
            addItem.group = groupid;
            addItem.item = theOrder.name;
            addItem.restaurant = restaurant;
            addItem.balance = 10;
            addItem.paid = false;

            //save the user
            addItem.save(function (err) {
                if (err) {
                    console.log('Error in Saving item: ' + err);
                    throw err;
                }
                console.log("**** Item added to Database *****");
                console.log(addItem);

                callback(addItem);
            });
        }
    },

    deleteOrder: function deleteOrder(user, data, callback) {

        if (!user) {
            console.log('not logged in');
        } else {
            var _id = user._id,
                group = user.group;
            var value = data.value,
                restaurant = data.restaurant;


            Orders.remove({ userid: _id, group: group.id, item: value }, function (err) {
                if (err) return handleError(err);
                callback();
            });
        };
    },

    getOrders: function getOrders(id, callback) {
        Orders.find({ 'group': id, 'paid': false }, function (err, res) {
            if (err) {
                console.log(err);
            };
            callback(res);
        });
    }
};

module.exports = Order;
//# sourceMappingURL=orders.js.map