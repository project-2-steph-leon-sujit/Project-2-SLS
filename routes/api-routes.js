// Pull in required dependencies
var path = require('path');
var db = require("../models/");


// Export API routes
module.exports = function (app) {

      // Total list of budget entries
      app.get('/api/models/budget', function (req, res) {
        res.json(budget);

      });

      //POST new expense/income
      app.post("/api/new", function(req, res) {

        console.log("Budget Data:");
        console.log(req.body);
    
        db.Budget.create({
          name: req.body.name,
          expense: req.body.amount,
          category: req.body.category,
          description: req.body.description,
          date: req.body.created_at
        }).then(function(results) {
          // `results` here would be the newly created budget
          // res.end();
          console.log(results);
          console.log("this is coming from the database");
        });
    
      });




    }





    // // Add new user
		// budget.push(userInput);

    // // Send appropriate response
    // res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });

