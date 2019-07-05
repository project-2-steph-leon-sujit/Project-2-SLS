var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/budget", function (req, res) {
    console.log("is this working yet?");
    db.CategoryBudget.findAll({}).then(function (dbCategoryBudget) {
      res.json(dbCategoryBudget);
      console.log("THIS IS dbCategoryBudget", dbCategoryBudget);
    });
  });

  //TODO: route to post form to category budget database
  // Add new budget entry
  app.post('/api/budget', function (req, res) {
    db.CategoryBudget.create(req.body).then(function (dbCategoryBudget) {
      res.json(dbCategoryBudget);
    });
  });


  // PUT route for updating category budget



  app.put("/api/budget", function (req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.CategoryBudget.update(req.body,
      {
          where: {
            id: 1
          }
      })
      .then(function(dbPost){
        res.json(dbPost);
      })

  });

  // app.put("/api/budget", function(req, res) {
  //   // Add code here to update a post using the values in req.body, where the id is equal to
  //   db.post("api/budget", function(req,res) {
  //     db.CategoryBudget.update(req.body, { where: { id: 1}}).then(function(dbCategoryBudget){
  //       res.json(dbCategoryBudget);
  //     });
  //   });
  //   // req.body.id and return the result to the user using res.json
  // });



  //end module.exports
};