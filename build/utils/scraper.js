'use strict';

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restaurants = {
    dairyqueen: {
        menu: 'https://www.dairyqueen.com/us-en/Menu/Food/',
        item: '.menu-list',
        titleattr: 'title',
        image: '.item-container',
        imgattr: 'src',
        homepage: 'http://www.dairyqueen.com'
    },

    subway: {
        menu: 'http://www.subway.com/en-us/menunutrition/menu/all',
        item: '.menu-cat-prod-title',
        titleattr: null,
        image: '.menu-item-title',
        imgattr: 'src',
        homepage: 'http://www.subway.com/'
    }

};

var scraper = function scraper(selection) {
    var _restaurants$selectio = restaurants[selection],
        menu = _restaurants$selectio.menu,
        item = _restaurants$selectio.item,
        titleattr = _restaurants$selectio.titleattr,
        image = _restaurants$selectio.image,
        imgattr = _restaurants$selectio.imgattr,
        homepage = _restaurants$selectio.homepage;


    return new Promise(function (resolve, reject) {

        _request2.default.get(menu, function (error, response, body) {
            var $ = _cheerio2.default.load(body);
            var results = [];

            if (selection === 'dairyqueen') {
                $(item).find('a').each(function (i, element) {
                    var menuItem = {};
                    menuItem.name = $(element).attr('title');
                    results.push(menuItem);
                });
            } else if (selection === 'subway') {
                $(item).each(function (i, element) {
                    var menuItem = {};
                    menuItem.name = $(element).text();
                    results.push(menuItem);
                });
            }

            $(image).find('img').each(function (index, picture) {
                var pic = $(picture).attr(imgattr);
                results[index].image = homepage + pic;
            });

            resolve(results);
        });
    });
};

module.exports = scraper;
//# sourceMappingURL=scraper.js.map