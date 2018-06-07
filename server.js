'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    userRoutes = require('./api/routes/usersRoutes');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

userRoutes(app);

app.get('/', function (req, res) {
    res.send('RESTful API server started on: ' + port)
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
});