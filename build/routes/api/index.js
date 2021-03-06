"use strict";

var router = require("express").Router();
var scraper = require("../../utils/scraper.js");
var order = require("../../middlewares/orders.js");
var userRoutes = require("./user.js");

// Scraper route
router.use("/scraper", function (req, res) {
    scraper(req.body.restaurant).then(function (data) {
        res.send(data);
    });
});

// Add Item route
router.post("/add", function (req, res) {
    if (!req.user) {
        res.send('You are not logged in!');
    }

    var _req$user = req.user,
        _id = _req$user._id,
        group = _req$user.group,
        name = _req$user.name;
    var theOrder = req.body.theOrder;


    var userOrder = {
        userid: _id,
        name: name,
        groupid: group.id,
        theOrder: theOrder
    };

    order.newOrder(userOrder);
    res.send(userOrder);
});

//delete
router.post("/delete", function (req, res) {

    order.deleteOrder(req.user, req.body, function () {
        order.getOrders(req.user.group.id, function (data) {
            res.send(data);
        });
    });
});

//User API routes
router.use("/user", userRoutes);

module.exports = router;
//# sourceMappingURL=index.js.map