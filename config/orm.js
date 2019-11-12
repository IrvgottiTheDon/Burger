const mysql=require("mysql");
// const Mysql = function (connectionParam) {
//     this.connection=mysql.createConnection(process.env.JAWSDB_URL)
// };

class MySql{
    constructor(){
    this.connection=mysql.createConnection(
  {
      host:"tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port:"3306",
      user:"nlpy09x3gp2hzifn",
      password:"v4u5pn7yacriphz8",
      database:"e3et6rurd114ye7e"
     }      
  )
 }
 addBurger(setVal,callback){
     this.connection.query("INSERT INTO burgers SET ?",setVal,callback)
 }
 devourBurger(setVal,callback){
     this.connection.query("UPDATE burgers SET ?", setVal,callback)
 }
 getBurger(callback){
     this.connection.query("SELECT * FROM burgers",callback)
 }
}