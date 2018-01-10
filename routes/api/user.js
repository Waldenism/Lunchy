const router = require("express").Router();
const order = require("../../middlewares/orders.js");


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
