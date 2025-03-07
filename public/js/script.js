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