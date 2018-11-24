'use strict'
const sql = require('./db');

var User = {};

User.signUp = (newUser, result) => {
   sql.query("INSERT INTO user set ?", newUser, (err, res) => {
      if (err) {
         console.log("error: ", err);
         return result(err, null)
      }

      console.log(res.insertId);
      result(null, res.insertId);
   });
}

User.signIn = (params, result) => {
   sql.query("SELECT * FROM user WHERE username = ? AND password = ?", [params.username, params.password], (err, user) => {
      if (err) {
         console.log("error: ", err);
          return result(err, null)
      }

      console.log(user);
      result(null, user);
   });
}

module.exports = User;