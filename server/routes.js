var handler = require('./handler.js');

module.exports = function (app) {

    // index
    app.get('/', function (req, res) {
        res.send('I am a interview bot');
    });

    app.get('/test/', function (req, res) {
        handler.reqHandler(req, res);
    });
};
