app.get('/', function(req, res, next) {
    res.render('home', {layout: 'main', template: 'home-template'});
  });

app.get('/budget', function(req, res, next) {
res.render('budget', {layout: 'main', template: 'budget-template'});
});