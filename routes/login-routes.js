var db = require("../models/");


// Export API routes
module.exports = function (app) {

    // Total list of Login entries
    app.get('/api/login', function (req, res) {
        console.log("this is hit");

        db.Login.findAll({}).then(function(result){
            res.json(result);
        })
        // res.end();
    })
       

      //POST login expense/income
      app.post("/api/login", function(req, res) {

        console.log("Login Data:");
        console.log(req.body);
    
        db.Login.create({
          username: req.body.username,
 
        }).then(function(results) {
          // `results` here would be the newly created Login
          // res.end();
          console.log(results);
          console.log("this is coming from the database");
        });
      });
      
      
    }