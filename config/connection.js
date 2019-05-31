var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gl68zf4oj42ef43x",
  password: "hd2ahjhko85ysf7q",
  database: "er1lafzhaaol9p4n"
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
