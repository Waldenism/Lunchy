const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");
const order = require("../../middlewares/orders.js");

// Scraper route
router.use("/scraper", function(req, res) {
    scraper(req.body.value).then(data => res.send(data)
    );
});

// Add Item route
router.use("/add", function(req, res) {
    order.newOrder(req.user, req.body);

     console.log(req.body);
    // console.log("--------------------------");
    // console.log(req.user);
});


module.exports = router;

