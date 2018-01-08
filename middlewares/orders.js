var Orders = require('../models/orders');

const Order = {
    newOrder: (user, data) => {

        if (!user) {
            console.log('not logged in');

        } else {

            let { _id, group } = user;
            let { value, restaurant } = data;

            let addItem = new Orders()
            addItem.userid = _id;
            addItem.group = group.name;
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
                console.log('Item added to Database');
                console.log("****add item*****")
                console.log(addItem);
            });
        }
    }
}


module.exports = Order;
