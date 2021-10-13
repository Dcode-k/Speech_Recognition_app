const btn= document.querySelector('.talk');
const content=document.querySelector('.content');

const greetings=[
    'Im fine you lovely child',
    'everything goes fine',
    'leave me alone'
]
const weather=[
    'there is a nice weather',
    ' weather is fine ,can we go outside to play'
]

const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart = function(){
    console.log('voice start ho rahi he');
}

recognition.onresult = function(event){
// console.log(event);
const current=event.resultIndex;

const transcript=event.results[current][0].transcript;
content.textContent=transcript;
readOutLoud(transcript);
};


btn.addEventListener('click', ()=> {
recognition.start();
})


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text='samaj nahi aa raha mere';
    if(message.includes('how are you')||message.includes('hello')){
   const finalMessage=  greetings[Math.floor(Math.random()*greetings.length)];
   speech.text=finalMessage;
    }
    if(message.includes('what about todays weather')||message.includes('weather')){
        const finalMessage=  weather[Math.floor(Math.random()*weather.length)];
        speech.text=finalMessage;
         }
    // speech.text=message;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}
// recognition.onspeechend = function(){

// }

// try{

// }catch(e){

// }