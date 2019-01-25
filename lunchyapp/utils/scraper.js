import cheerio from 'cheerio';
import request from 'request';

const restaurants = {
    dairyqueen: {
        menu: 'https://www.dairyqueen.com/us-en/Menu/Food/',
        item: '.menu-list',
        titleattr: 'title',
        image: '.item-container',
        imgattr: 'src',
        homepage: 'http://www.dairyqueen.com'
    }

    subway: {
        menu: 'http://www.subway.com/en-us/menunutrition/menu/all',
        item:'.menu-cat-prod-title',
        titleattr: null,
        image: '.menu-item-title',
        imgattr: 'src',
        homepage: 'http://www.subway.com/'
    },
    
}

const scraper = function(selection) {

    const { menu, item, titleattr, image, imgattr, homepage } = restaurants[selection];

    return new Promise(function(resolve, reject) {

        request.get(menu, function(error, response, body) {
            const $ = cheerio.load(body);
            let results = [];

            if (selection === 'dairyqueen') {
                $(item).find('a').each(function(i, element) {
                    let menuItem = {};
                    menuItem.name = $(element).attr('title');
                    results.push(menuItem);
                });
            } else if (selection === 'subway') {
                $(item).each(function(i, element) {
                    let menuItem = {};
                    menuItem.name = $(element).text();
                    results.push(menuItem);
                });
            }

            $(image).find('img').each((index, picture) => {
                let pic = $(picture).attr(imgattr);
                results[index].image = homepage + pic
            });

            resolve(results);
        });
    })
}

module.exports = scraper;
