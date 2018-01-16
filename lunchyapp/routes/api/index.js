const router = require("express").Router();
const scraper = require("../../utils/scraper.js");
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
    if (!req.user) {
        res.send('You are not logged in!')
    }

    const { _id, group, name } = req.user;
    const { theOrder } = req.body;

    let userOrder = {
        userid: _id,
        name: name,
        groupid: group.id,
        theOrder: theOrder
    }

    order.newOrder(userOrder);
    res.send(userOrder);
});


//delete
router.post("/delete", function(req, res) {

    order.deleteOrder(req.user, req.body, function() {
        order.getOrders(req.user.group.id, function(data) {
            res.send(data);
        });
    });
});


//User API routes
router.use("/user", userRoutes);

module.exports = router;
