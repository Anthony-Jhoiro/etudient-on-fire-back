const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  port: '3308',
  user: 'root',
  password: '',
  database: 'entudiant-on-fire'
}); 