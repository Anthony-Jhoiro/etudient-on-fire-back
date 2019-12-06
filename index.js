const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3308', 
    user     : 'root',
    password : '',
    database : 'entudiant-on-fire'
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });

recupListeTopic = (categorie = null) => {
    
}

app.get('/getTopics', function (req, res) {
    //res.json(req.body);
    if (req.query.categorie) {
        connection.query('SELECT * FROM topic', (err, rows, field) => {
            if (err) throw err;
            res.json(rows);
        });
    }
    else {
        connection.query('SELECT id_topic, titre, content, nom, prenom, libelle FROM topic INNER JOIN user ON topic.auteur = user.id_usr INNER JOIN categorie ON topic.cat_id = categorie.id_cat WHERE libelle = ?', [req.query.categorie],(err, rows, fiels) => {
            if (err) throw err;
            res.json(rows);
        });
    }
});

app.get('/getCommentaires', function (req, res){
    connection.query('SELECT * FROM commentaire WHERE article_id = ?', [req.query.idArt], (err, rows, fiels) => {
        if (err) throw err;
        res.json(rows);
    });
})

app.get('/getTopicDetail', function (req, res) {
    connection.query('SELECT * FROM topic WHERE id_topic = ?', [req.query.id], (err, rows, fiels) => {
        if (err) throw err;
        res.json(rows);
    });
})

app.get('/getCategories', function (req, res) {
    connection.query('SELECT * FROM categorie', (err, rows, fiels) => {
        if (err) throw err;
        res.json(rows);
    });
})



// app.post('/newTopic', (req, res) => {
//     // req.body.
// });



app.listen(3001, () => console.log("listening on port 3000"));
