var express = require('express'),
    cons = require('consolidate'),
    app = express();

// set custom tags
var qejs = require('qejs');
qejs.open = '{{';
qejs.close = '}}';

// assign the swig engine to .html files
app.engine('html', cons.qejs);

// set .html as the default extension 
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var users = [];
users.push({ name: 'Obi' });
users.push({ name: 'Wan' });
users.push({ name: 'Kenobi' });

// index / Home page
app.get('/', function(req, res){
  res.render('index', {
    title: 'Express using Qejs and consolidate.js',
    users: users
  });
});

// users page
app.get('/users', function(req, res){
  res.render('users', {
    title: 'Users',
    users: users
  });
});


app.listen(3000);
console.log('Express server listening on port 3000');