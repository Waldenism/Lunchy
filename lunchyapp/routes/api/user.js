const router = require("express").Router();
const order = require("../../middlewares/orders.js");
const user = require("../../config/users.js");


// Check Login Status
router.get("/current", function(req, res) {
    res.send(req.user);
    console.log('current: ' + req.user)
});


// Matches with "/api/scraper/subway"
router.get('/group-orders', function(req, res) {
  let { name, id } = req.user.group

  order.getOrders(id, function(data) {
    let groupData = {
      name: name,
      data: data
    }
    res.send(groupData);
  });
});

router.get('/my-orders', function(req, res) {
  let { _id } = req.user

  order.getMyOrders(_id, function(data) {
    res.send(data)
  })
})

router.post('/update-account', function(req, res) {
  let info = {
    userid: req.user._id,
    newInfo: req.body
  };

  user.updateInfo(info, function(data) {
    res.send(data)
  })
});

module.exports = router;
