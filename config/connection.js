  var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
      });
}

//Connectivity
connection.connect(function(err) {
  if (err) {
    console.error("Unable to Connect: " + err.stack);
    return;
  }
  console.log("Connected w/ ID " + connection.threadId);
});

module.exports = connection;