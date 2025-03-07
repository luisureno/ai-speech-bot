const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));  //allows html to be served from anywhere
app.use(express.static(__dirname + '/public')); // allows for js/css files to be served from anywhere

const server = app.listen(5000) //starts the server on port 5000

app.get('/', (req, res) => {    
    res.sendFile('index.html'); //sends the html file to the client
});






