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
    var _req$user = req.user,
        _id = _req$user._id,
        group = _req$user.group;
    var theOrder = req.body.theOrder;


    var userOrder = {
        userid: _id,
        groupid: group.id,
        theOrder: theOrder
    };

    order.newOrder(userOrder, function (data) {
        res.send(data);
        console.log(data);
    });
});

router.post("/delete", function (req, res) {
    order.deleteOrder(req.user, req.body, function (data) {
        res.send(data);
    });
});

//User API routes
router.use("/user", userRoutes);

module.exports = router;
//# sourceMappingURL=index.js.map