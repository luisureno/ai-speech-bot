// window.SR allows to recognize voice data as text and 'window; stands for the browser window
//window.webkit.SR is used for the webkit browser to ensure that the browser is compatible with the speech recognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 

//creates a new instance of the speech recognition object & creates a new speech recogntion engine
//this is will be used to start listening to spoken words and convert them to text
const recognition = new SpeechRecognition(); 

//listens for the speak button
document.querySelector('buttoon').addEventListener('click', () => {
    recognition.start(); //starts the recognition engine    
});

//'result' event occurs when speech is detected and processed
recognition.addEventListener('result', (e) => {
    //the speech recognition engine returns different parts of a sentence, so
    //this line will get the last part of the sentence since its more accurate
    let last = e.results.length - 1; 
    //retreives the transcipt from the last result
    let text = e.results[last][0].transcipt;
    //confidence score of the speech recognition engine between 0 and 1
    console.log('Confidence: ' + e.results[0][0].confidence);
});

const socket = io(); //connects to the server  

socket.emit('chat message', text); //sends the text to the server

function synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }

SpeechSynthesis.speak()

socket.on('bot reply', function(replyText) {
    synthVoice(replyText);
  });
  