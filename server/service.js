var cheerio = require('cheerio');
var request = require('request');

exports.reqService = function(req, res) {

    var data = req.body.entry;
    var url = "http://prepareinterview.com/";

    request(url, function(error, response, html) {

        if(!error) {
            var page = cheerio.load(html);
            console.log(page);
        }
    });
    res.send(data);
    console.log(data);
};
