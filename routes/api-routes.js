// Pull in required dependencies
var path = require('path');
var db = require("../models/");


// Export API routes
module.exports = function (app) {

    // Total list of budget entries
    app.get('/api/new', function (req, res) {
        console.log("this is hit");

        db.Budget.findAll({}).then(function(result){
            res.json(result);
        })
        // res.end();
    })
       

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
      
      
      app.delete("/api/new/:id", function(req, res) {
        db.Budget.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(destroy) {
          res.json(destroy);
        });
      });

//   //     //TODO: route to post form to category budget database
//   // // Add new budget entry
//   // app.post('/api/budget', function (req, res) {
//   //   db.CategoryBudget.create(req.body).then(function(dbCategoryBudget) {
//   //     res.json(dbCategoryBudget);
//   //   });
//   // });
//   app.get('/api/budget', function (req, res) {
//     console.log("this is working");

//     db.CategoryBudget.findAll({}).then(function(result){
//         res.json(result);
//         console.log(result);
//     });
//     // res.end();
// })

  //end module.exports
    }

    








