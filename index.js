const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nuit_on_fire'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});



app.get('/qqch', function (req, res) {
    //res.json(req.body);
    console.log(req);
});

app.post('/newTopic', (req, res) => {
    // req.body.
});

connection.end();

app.listen(3000, () => console.log("listening on port 3000"));
