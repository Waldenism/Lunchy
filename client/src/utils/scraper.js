import cheerio from 'cheerio';
import request from 'request';

const restaurants = {
    subway: {
        menu: 'http://www.subway.com/en-us/menunutrition/menu/all',
        item:'.menu-cat-prod-title',
        image: '.menu-item-title',
        attr: 'src'
    },
    burgerking: {
        menu: 'http://www.bk.com/menu/burgers',
        item:'.title',
        image: '.imgWrap',
        attr: 'data-cfsrc'
    }
}

const scraper = function(selection) {

    const { menu, item, image, attr } = restaurants[selection]

    return new Promise(function(resolve, reject) {

        request.get(menu, function(error, response, body) {
            const $ = cheerio.load(body);
            let results = [];

            let menu = $(item).each(function(i, element) {
                let couple = {};
                couple.name = $(element).text();
                couple.image = $(image).find('img').attr(attr);
                if (selection === 'subway') {
                    couple.image = 'http://www.subway.com/' + couple.image
                }
                results.push(couple);
            });
            resolve(results);
        });
    })
}

module.exports = scraper;
