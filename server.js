require('dotenv').config();

var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;
var config = require('./config');


app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are

// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./routes/budget-api-routes.js")(app);

db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

// app.listen(port);

// //@TODO Delete below after you verify the the app is working
app.route('/').get(function (request, response) {
    response.json(config);
});

// // console.log(db)