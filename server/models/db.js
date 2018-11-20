'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
   host: '156.67.212.103',
   user: 'u3785757_admin',
   password: 'belumtentujadi',
   database: 'u3785757_learning'
});

connection.connect(function (err) {
   if (err) throw err;
});

module.exports = connection;