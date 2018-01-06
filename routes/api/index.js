const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");

// Scraper route
router.use("/scraper", function(req, res) {
    scraper(req.body.value).then(data => res.send(data)
    );
});

// Add Item route
router.use("/add", function(req, res) {
    console.log(req.body.value);

    // scraper(req.body.value).then(data => console.log(data)
    // );
});


module.exports = router;
