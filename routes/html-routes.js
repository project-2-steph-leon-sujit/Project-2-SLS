// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });     
 // blog route loads budget.html
 app.get("/budget", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/budget.html"));
});

// authors route loads settings.html
app.get("/settings", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/settings.html"));
});


};