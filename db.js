var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'todo'
});
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE todos (id INT AUTO_INCREMENT PRIMARY KEY, text VARCHAR(255))";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
connection.connect();

module.exports = connection;
