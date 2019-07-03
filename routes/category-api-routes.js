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




  //end module.exports
};