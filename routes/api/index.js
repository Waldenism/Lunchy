
const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");

// Scraper route
router.use("/scraper", function(req, res) {
    scraper(req.body.value).then(data => res.send(data)
    );
});

// module.exports = router;