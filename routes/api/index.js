const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");
const order = require("../../middlewares/orders.js");
const userRoutes = require("./user.js");

// Scraper route
router.use("/scraper", function(req, res) {
    scraper(req.body.value).then(data => res.send(data)
    );
});

// Add Item route
router.post("/add", function(req, res) {
    order.newOrder(req.user, req.body, function(data) {
        res.send(data);
    });
});


//User API routes
router.use("/user", userRoutes);

module.exports = router;
