const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));  //allows html to be served from anywhere
app.use(express.static(__dirname + '/public')); // allows for js/css files to be served from anywhere

const server = app.listen(5000) //starts the server on port 5000

app.get('/', (req, res) => {    
    res.sendFile('index.html'); //sends the html file to the client
});

const apiai = require('apiai')('4186267be6e82cfd0b15417cf03aa36695e7e496');


io.on('connection', function(socket) {
    socket.on('chat message', (text) => {
  
      // Get a reply from API.AI
  
      let apiaiReq = apiai.textRequest(text, {
        sessionId: APIAI_SESSION_ID
      });
  
      apiaiReq.on('response', (response) => {
        let aiText = response.result.fulfillment.speech;
        socket.emit('bot reply', aiText); // Send the result back to the browser!
      });
  
      apiaiReq.on('error', (error) => {
        console.log(error);
      });
  
      apiaiReq.end();
  
    });
  });
