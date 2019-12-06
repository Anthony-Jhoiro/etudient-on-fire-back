const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const app = express();

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

var connection = require('./config');

connection.connect();

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

// app.post('/creationTopic', (req, res) => {
//     connection.query('SELECT ')
//     connection.query('INSERT INTO topic(titre, contenu, auteur, cat_id) VALUES(?,?,?,?)', (err, rows, fiels) => {
//         if (err) throw err;
//         res.json(rows);
//     });
// });





app.listen(3001, () => console.log("listening on port 3000"));
