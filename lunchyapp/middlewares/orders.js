var Orders = require('../models/orders');
var Users = require('../models/users');

const Order = {
    newOrder: (user) => {
        let { userid, groupid, theOrder, name } = user;

        if (!userid) {
            console.log('not logged in');

        } else {

            for (let i=0; i < theOrder.length; i++) {
                let addItem = new Orders()
                addItem.userid = userid;
                addItem.name = name;
                addItem.group = groupid;
                addItem.item = theOrder[i].name;
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
                });
            }

        }
    },

    deleteOrder: (user, data, callback) => {

        if (!user) {
            console.log('not logged in');

        } else {
            let { group } = user;
            let { value, userid } = data;

            Orders.remove({ userid: userid, group: group.id, item: value}, function(err) {
                if (err) return handleError(err);
                callback();
            });
        };
    },

    getOrders: (id, callback) => {
        Orders.find({ 'group': id, 'paid': false }, function(err, res) {
            if (err) { console.log(err) };
            callback(res)
        })
    }
}


module.exports = Order;
