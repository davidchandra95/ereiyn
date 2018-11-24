const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mysql = require('mysql');
const config = require('./config/config');

const conn = mysql.createConnection({
   host: '156.67.212.103',
   user: 'u3785757_admin',
   password: 'belumtentujadi',
   database: 'u3785757_learning'
});

conn.connect();

app.listen(port, console.log(`Server running on post ${port}`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes/userRoutes')(app);

