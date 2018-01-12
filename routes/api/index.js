const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");
const order = require("../../middlewares/orders.js");
const userRoutes = require("./user.js");

// Scraper route
router.use("/scraper", function(req, res) {
    scraper(req.body.restaurant).then(data => {
        res.send(data);
    });
});

// Add Item route
router.post("/add", function(req, res) {
    const { _id, group } = req.user;
    const { theOrder } = req.body;

    let userOrder = {
        userid: _id,
        groupid: group.id,
        theOrder: theOrder
    }

    order.newOrder(userOrder, function(data) {
        res.send(data);
        console.log(data);
    });
});

router.post("/delete", function(req, res) {
    order.deleteOrder(req.user, req.body, function(data) {
        res.send(data);
    });
});


//User API routes
router.use("/user", userRoutes);

module.exports = router;
