
module.exports = function (app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
      });

app.get('/budget', function(req, res, next) {
res.render('budget', {layout: 'main', template: 'budget-template'});
});

};