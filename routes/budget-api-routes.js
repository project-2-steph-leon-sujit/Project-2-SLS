var db = require("../models");

module.exports = function(app) {

    app.get("/api/budgets", function(req, res){
        console.log("this is hit");
    })

    // app.post("/api/budget", function(req, res) {
    //     db.Budget.create(req.body).then(function(dbBudget) {
    //     // console.log("a post is hitting");
    //       res.json(dbBudget);
    //     });
    //   });
  };
  

  