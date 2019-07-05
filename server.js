require('dotenv').config();

var express = require('express'); 
var app = express();
var PORT = process.env.PORT || 9000;
// var config = require('./config/config.json');
var router = express.Router();
var path = require("path");
var moment = require('moment');


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname, '/public')));

var hbs = require("express-handlebars");

app.set("view engine", "hbs");
app.engine('hbs', hbs( {
        extname: 'hbs',
        defaultView: "main",
        layoutsDir: __dirname + '/views/pages/',
        partialsDir: __dirname + '/views/partials/' 
    }));


// app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are

// Requiring our models for syncing
var db = require("./models");

// Routes
// =============================================================
// require("./routes/budget-api-routes.js")(app); TODO: this has been deprecated. 
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/category-api-routes.js")(app);

db.sequelize.sync({
    force: false  //! <-------use true if you want it to drop tables. change this to false later. 
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
// y
// app.listen(port);

// //@TODO Delete below after you verify the the app is working
// app.route('/').get(function (request, response) {
//     response.json(config);
// });

// // console.log(db)
