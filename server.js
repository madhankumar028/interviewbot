var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./server/routes.js')(app);
app.listen(port);

console.log('App is listening on' +port);
