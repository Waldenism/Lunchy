const router = require("express").Router();
const scraperRoutes = require("./scraper.js");


// Scraper routes
router.use("/scraper", scraperRoutes);


module.exports = router;
