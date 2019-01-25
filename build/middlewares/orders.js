'use strict';

var Orders = require('../models/orders');
var Users = require('../models/users');

var Order = {
    newOrder: function newOrder(user) {
        var userid = user.userid,
            groupid = user.groupid,
            theOrder = user.theOrder,
            name = user.name;


        if (!userid) {
            console.log('not logged in');
        } else {
            var _loop = function _loop(i) {
                var addItem = new Orders();
                addItem.userid = userid;
                addItem.name = name;
                addItem.group = groupid;
                addItem.item = theOrder[i].name;
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
                });
            };

            for (var i = 0; i < theOrder.length; i++) {
                _loop(i);
            }
        }
    },

    deleteOrder: function deleteOrder(user, data, callback) {

        if (!user) {
            console.log('not logged in');
        } else {
            var group = user.group;
            var value = data.value,
                userid = data.userid;


            Orders.remove({ userid: userid, group: group.id, item: value }, function (err) {
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
    },

    getMyOrders: function getMyOrders(id, cb) {
        Orders.find({ 'userid': id }, function (err, res) {
            if (err) {
                console.log(err);
            };
            cb(res);
        });
    }
};

module.exports = Order;
//# sourceMappingURL=orders.js.map