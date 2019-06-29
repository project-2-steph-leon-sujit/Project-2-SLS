//THIS HAS BEEN DEPRECATED


// var db = require("../models");

// module.exports = function(app) {

//     app.get("/api/budget/zzz", function(req, res){
//         console.log("this is hit");

//         db.Budget.findAll({}).then(function(result){
//             res.json(result);
//         })
//         // res.end();
//     })

//     app.post("/api/budget", function(req, res){

//         // console.log("Post working");
//         // console.log(req.body);
//         //TODO: WORKING with Postman. with this type of object:
//     //TODO:     { "category": "food",
//     //TODO:     "description": "wendys",
//     //TODO:     "expense": 10
//     //TODO:      }

//         db.Budget.create(req.body).then(function(dbBudget){
//             res.json(dbBudget)
//         })
        
//     })
//     // app.post("/api/budget", function(req, res) {
//     //     db.Budget.create(req.body).then(function(dbBudget) {
//     //     // console.log("a post is hitting");
//     //       res.json(dbBudget);
//     //     });
//     //   });
    
//   };
  

  