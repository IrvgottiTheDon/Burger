var connection = require("./connection.js");


function printQuestionMarks(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }

  return array.toString();
}

function objToSql(ob) {
  var array = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      array.push(key + "=" + ob[key]);
    }
  }

  return array.toString();
}


var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) { 
				throw err; 
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});

	},
	updateOne: function(table, colVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(colVals);
		queryString += " WHERE ";
		queryString += condition;



		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;

// const mysql=require("mysql");
// // const Mysql = function (connectionParam) {
// //     this.connection=mysql.createConnection(process.env.JAWSDB_URL)
// // };

// class MySql{
//     constructor(){
//     this.connection=mysql.createConnection(
//   {
//       host:"tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//       port:"3306",
//       user:"nlpy09x3gp2hzifn",
//       password:"v4u5pn7yacriphz8",
//       database:"e3et6rurd114ye7e"
//      }      
//   )
//  }
//  addBurger(setVal,callback){
//      this.connection.query("INSERT INTO burgers SET ?",setVal,callback)
//  }
//  devourBurger(setVal,callback){
//      this.connection.query("UPDATE burgers SET ?", setVal,callback)
//  }
//  getBurger(callback){
//      this.connection.query("SELECT * FROM burgers",callback)
//  }
// }