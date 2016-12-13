var cheerio = require('cheerio');

module.exports = function (app) {

    // index
    app.get('/', function (req, res) {
        res.send('I am a interview bot');
    });
};
