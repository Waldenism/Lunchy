// import cheerio from 'cheerio';
// import request from 'request';

<<<<<<< HEAD
// let scraper = new Promise(function(resolve, reject) {
//     request.get('http://www.subway.com/en-us/menunutrition/menu/all',
//         function(error, response, body) {

//             const $ = cheerio.load(body);

//             let results = [];
//             let menu = $('.menu-cat-prod-title').each(function(i, element) {
//                 let name = $(element).text();
//                 results.push(name);
//             });
//             resolve(results);
//         }
//     );
// })
=======
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
    },
    dairyqueen: {
        menu: 'https://www.dairyqueen.com/us-en/Menu/Food/',
        item: '.menu-list',
        image: '.item-container',
        attr: 'src'
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
                let name = $(element).text();
                let pic = $(image).find('img').attr(attr);

                //make object of menu item name and link to image
                couple.name = $(element).text();
                couple.image = $(image).find('img').attr(attr);

                //specificy scraping based on restaurant
                if (selection === 'subway') {
                    couple.image = 'http://www.subway.com/' + couple.image
                } else if (selection === 'dairyqueen') {
                    couple.name = $(element).find('a').attr('title');
                    couple.image = 'http://www.dairyqueen.com' + couple.image
                }

                //push object to array
                results.push(couple);
            });
            resolve(results);
        });
    })
}
>>>>>>> d2ec718a664592ff49c6d96b7a83d2022cff4dc8

// module.exports = scraper;
