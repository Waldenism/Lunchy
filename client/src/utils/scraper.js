import cheerio from 'cheerio';
import request from 'request';

const restaurants = {
    subway: {
        menu: 'http://www.subway.com/en-us/menunutrition/menu/all',
        element:'.menu-cat-prod-title'
    },
    burgerking: {
        menu: 'http://www.bk.com/menu/burgers',
        element:'.title'
    }
}

const scraper = function(selection) {

    return new Promise(function(resolve, reject) {
        request.get(restaurants[selection].menu,
            function(error, response, body) {

                const $ = cheerio.load(body);

                let results = [];
                let menu = $(restaurants[selection].element).each(function(i, element) {
                    let name = $(element).text();
                    results.push(name);
                });
                resolve(results);
            }
        );
    })
}

module.exports = scraper;
