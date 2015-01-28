var express = require('express');
var Roman = require('./roman-numerals.js');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});;

app.get('/generate/:numeral', function (req, res) {
    var romanNumeral = Roman.generate(parseInt(req.params.numeral));

    res.send(romanNumeral);
});

app.get('/parse/:numeral', function (req, res) {
    var arabicNumeral = Roman.parse(req.params.numeral);

    res.send(arabicNumeral.toString());
});

app.listen(1337);
console.log('Server active!');
