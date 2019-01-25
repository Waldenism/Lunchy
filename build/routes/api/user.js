"use strict";

var router = require("express").Router();
var order = require("../../middlewares/orders.js");
var user = require("../../config/users.js");

// Check Login Status
router.get("/current", function (req, res) {
  res.send(req.user);
  console.log('current: ' + req.user);
});

// Matches with "/api/scraper/subway"
router.get('/group-orders', function (req, res) {

  if (req.user) {
    var _req$user$group = req.user.group,
        admin = _req$user$group.admin,
        id = _req$user$group.id;


    if (admin) {
      order.getOrders(id, function (data) {
        var groupData = {
          name: req.user.group.name,
          data: data
        };

        res.send(groupData);
      });
    }
  }
});

router.get('/my-orders', function (req, res) {

  if (req.user) {
    var _id = req.user._id;

    order.getMyOrders(_id, function (data) {
      res.send(data);
    });
  }
});

router.post('/update-account', function (req, res) {
  var info = {
    userid: req.user._id,
    newInfo: req.body
  };

  user.updateInfo(info, function (data) {
    res.send(data);
  });
});

module.exports = router;
//# sourceMappingURL=user.js.map