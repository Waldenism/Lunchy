const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");
const order = require("../../middlewares/orders.js");

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

// Check Login Status
router.use("/status", function(req, res) {
    res.send(req.body);

    console.log('body ' + req.body)


    // let { body } =  req

    // console.log('body ' + body)

    // if (req.user) {
    //     let { user } =  req
    //     res.send(user, body);
    // } else {
    //     res.send(body);
    // }
});

//CRUD

router.get('/group-order', function(req, res) {
    console.log("group order get")
    res.json({one: 1})

    console.log(req.query)
    //group name
    //date
    //group members
    //order for that date
})

module.exports = router;

