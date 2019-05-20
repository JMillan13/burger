var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ajmillan13",
  database: "burgers_db"
});

//try to connect to mySQL
connection.connect(function(err) {
  if (err) {
    //console error if exists
    console.error("error connecting: " + err.stack);
    return;
  }
  //console success
  console.log("connected as id " + connection.threadId);
});

module.exports = connection
