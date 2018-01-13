"use strict";

var router = require("express").Router();
var order = require("../../middlewares/orders.js");

// Check Login Status
router.get("/current", function (req, res) {
    res.send(req.user);
    console.log('current: ' + req.user);
});

// Matches with "/api/scraper/subway"
router.get('/group-orders', function (req, res) {
    // console.log(req.user)
    if (req.user) {
        var _req$user$group = req.user.group,
            admin = _req$user$group.admin,
            id = _req$user$group.id;


        if (admin) {
            order.getOrders(id, function (data) {
                res.send(data);
            });
        }
    }
});

module.exports = router;
//# sourceMappingURL=user.js.map