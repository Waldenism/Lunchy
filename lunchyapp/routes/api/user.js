const router = require("express").Router();
const order = require("../../middlewares/orders.js");


// Check Login Status
router.get("/current", function(req, res) {
    res.send(req.user);
    console.log('current: ' + req.user)
});


// Matches with "/api/scraper/subway"
router.get('/group-orders', function(req, res) {

  if (req.user) {
    let { admin, id } = req.user.group

    if (admin) {
      order.getOrders(id, function(data) {
          let groupData = {
            name: req.user.group.name,
            data: data
          }

          res.send(groupData);
      });
    }
  }
});

// route
router.get('/my-orders', function(req, res) {

  if (req.user) {
    let { _id } = req.user
    order.getMyOrders(_id, function(data) {
      res.send(data)
    })
  }
})

module.exports = router;
