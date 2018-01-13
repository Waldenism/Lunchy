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
    // console.log(req.user)

    const { _id, group } = req.user;
    // console.log(req.user)
    const { theOrder } = req.body;

    let userOrder = {
        userid: _id,
        groupid: group.id,
        theOrder: theOrder
    }

    order.newOrder(userOrder, function(data) {
        res.send(data);
    });
});


//delete
router.post("/delete", function(req, res) {

    order.deleteOrder(req.user, req.body, function() {
        order.getOrders(req.user.group.id, function(data) {
                res.send(data);
            });
        
        // if (req.user.group.admin) {
            
            
        // }
    });
});


//User API routes
router.use("/user", userRoutes);

module.exports = router;
