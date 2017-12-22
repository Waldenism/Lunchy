import cheerio from 'cheerio';
import request from 'request';

let scraper = new Promise(function(resolve, reject) {
    request.get('http://www.subway.com/en-us/menunutrition/menu/all',
        function(error, response, body) {

            const $ = cheerio.load(body);

            let results = [];
            let menu = $('.menu-cat-prod-title').each(function(i, element) {
                let name = $(element).text();
                results.push(name);
            });
            resolve(results);
        }
    );
})

module.exports = scraper;
