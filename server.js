const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// mongodb connection string
const CONNECTION_STRING = "mongodb+srv://admin:admin@cluster0.7a5dogw.mongodb.net/test";
const DATABASE = "test";
var database;

app.listen(port, () => {
    console.log('Server running on port ' + port);
    MongoClient.connect(CONNECTION_STRING, {
        useNewUrlParser: true
    }, (err, client) => {

        if (err) {
            console.log('Not Connected to the database, err:  ' + err);
        } else {
            database = client.db(DATABASE);
            console.log('Connection Successfully, Now Connected to MongoDB to the DataBase: ' + DATABASE);
        }

    })
});

app.get('/', (req, res) => {
    res.send("Main")
});