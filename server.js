const express = require('express');
const path = require('path');
const exapp = express();
exapp.set('view engine', 'ejs');
exapp.set('views', path.join(__dirname, 'views'));
exapp.use(express.static('public'));

exapp.get('/', function(req, res) {
    res.render('index', { title: 'Reinsdyrregisteret' });
});

exapp.get('/about', function(req, res) {
    res.render('about', { title: 'Reinsdyrregisteret' });
});

exapp.get('/kart', function(req, res) {
    res.render('kart', { title: 'Reinsdyrregisteret' });
});

exapp.get('/search', function(req, res) {
    res.render('search', { title: 'Reinsdyrregisteret' });
});

exapp.listen(3000, function() {
    console.log('Server listening on http://localhost:3000');
});
