// Pull in required dependencies
var path = require('path');
var db = require("../models/");


// Export API routes
module.exports = function (app) {

    // Total list of budget entries
    app.get('/api/login', function (req, res) {
        console.log("this is hit");

        db.Login.findAll({}).then(function(result){
            res.json(result);
        })
        // res.end();
    })
       


      //POST new expense/income
      app.post("/api/login", function(req, res) {

        // console.log("username Data:");
        console.log(req.body);
    
        db.Login.create({
          username: req.body.username,
          password: req.body.password
        }).then(function(results) {
          // `results` here would be the newly created budget
          // res.end();
          console.log(results);
          console.log("this is coming from the database");
        });
      });
    }

    

    // {"username": "Leon1", "password": "Hunter22"} <--posttman example