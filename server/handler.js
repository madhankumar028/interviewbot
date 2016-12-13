var service = require('./service.js');

exports.reqHandler = function(req, res) {
    service.reqService(req, res);
};
