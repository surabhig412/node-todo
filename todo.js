var db = require('./db');
var express = require('express');
var app = express();
// var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.set("view engine","jade")

app.get('/', function(req, res) {
  db.query("select * from todos", function(err, result) {
    if(err) res.send(err);
    var str = JSON.stringify(result);
    res.render('main', {todos: JSON.parse(str)});
    // res.sendFile(path.join(__dirname + '/index.html'));
  })
});

app.post('/api/todos', function(req, res) {
  var todo = {text: req.body.text};
  db.query("insert into todos set ?", todo, function(err, result) {
    if(err) throw err;
    console.log("todo inserted");
  });
  db.query("select * from todos", function(err, result) {
    if(err) res.send(err);
    res.json(result);
  });
});

app.get('/api/todos/:todo_id', function(req, res) {
  console.log(req.params.todo_id);
  db.query("delete from todos where id= ?", req.params.todo_id, function(err, result) {
    if(err) throw err;
    console.log("todo deleted");
  });
  db.query("select * from todos", function(err, result) {
    if(err) res.send(err);
    res.json(result);
  })
});

app.listen(8071);
