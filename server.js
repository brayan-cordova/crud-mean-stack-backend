const express = require('express');
const mongoose = require('mongoose');
const server = express();
const routes = require('./routes/routes');
const cors = require('cors');

// initializing server

const port = process.env.PORT || 3000;

// mongodb connection string
mongoose.connect("mongodb://127.0.0.1:27017/mean_crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function checkDB(error) {
    if (error) {
        console.log('Not Connected to the database, err:  ' + error);

    } else {

        console.log('Connection Successfully, Now Connected to the DataBase on MongoDB ');
    }
});

// server configuration
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, function check(error) {

    if (error) {
        console.log('Error on server: ' + error);

    } else {

        console.log('Server running on port ' + port);
    }

});