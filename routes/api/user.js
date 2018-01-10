const router = require("express").Router();
const order = require("../../middlewares/orders.js");


// Check Login Status
router.get("/current", function(req, res) {
    res.send(req.user);
    console.log('body: ' + req.user)
});


// Matches with "/api/scraper/subway"
router.get('/group-orders', function(req, res) {
    let { admin, id } = req.user.group

    if (admin) {
        order.getOrders(id, function(data) {
            res.send(data);
        });
    }
});

module.exports = router;
