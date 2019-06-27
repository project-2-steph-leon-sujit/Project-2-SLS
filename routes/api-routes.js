// Pull in required dependencies
var path = require('path');

// Import the list of budget entries
var budget = require('../models/budget.js');

// Export API routes
module.exports = function (app) {
    // console.log('___ENTER apiRoutes.js___');

    // Total list of budget entries
    app.get('/api/models/budget', function (req, res) {
        res.json(budget);

    });

    // Add new budget entry
    app.post('/api/budget', function (req, res) {
      db.Post.create(req.body).then(function(dbPost) {
        res.json(dbPost)
      })




    }





    // Add new user
		budget.push(userInput);

    // Send appropriate response
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
});
