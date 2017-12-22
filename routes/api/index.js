const router = require("express").Router();
const scraperRoutes = require("./scraper.js");


// Scraper routes
router.use("/scraper", scraperRoutes);

// router.post('/scraper', function(req, res) {
//     console.log('in scraper');
//     res.redirect('/');
// });


module.exports = router;
