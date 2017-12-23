import cheerio from 'cheerio';
import request from 'request';

const restaurants = {
    subway: {
        menu: 'http://www.subway.com/en-us/menunutrition/menu/all',
        item:'.menu-cat-prod-title'
    },
    burgerking: {
        menu: 'http://www.bk.com/menu/burgers',
        item:'.title',
        image: '.imgWrap'
    }
}

const scraper = function(selection) {

    const { menu, item } = restaurants[selection]

    return new Promise(function(resolve, reject) {
        request.get(menu, function(error, response, body) {

            const $ = cheerio.load(body);

            let results = [];
            let menu = $(item).each(function(i, element) {
                let name = $(element).text();
                results.push(name);
            });
            resolve(results);
        });
    })
}

module.exports = scraper;
