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
    // console.log(req.user)

    var _req$user = req.user,
        _id = _req$user._id,
        group = _req$user.group;
    // console.log(req.user)

    var theOrder = req.body.theOrder;


    var userOrder = {
        userid: _id,
        groupid: group.id,
        theOrder: theOrder
    };

    order.newOrder(userOrder, function (data) {
        res.send(data);
    });
});

//delete
router.post("/delete", function (req, res) {

    order.deleteOrder(req.user, req.body, function () {
        order.getOrders(req.user.group.id, function (data) {
            res.send(data);
        });

        // if (req.user.group.admin) {


        // }
    });
});

//User API routes
router.use("/user", userRoutes);

module.exports = router;
//# sourceMappingURL=index.js.map