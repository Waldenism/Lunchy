const router = require("express").Router();
const scraper = require("../../client/src/utils/scraper.js");


// Matches with "/api/scraper/subway"
router.post('/subway', function(req, res) {
    scraper(req.body.value).then(data => res.send(data));
});

module.exports = router;
