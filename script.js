const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;
const textToSpeech = () =>{
    const syntx = window.speechSynthesis;
    const text = textarea.value;

    if(!syntx.speaking && text){
    const utternace = new SpeechSynthesisUtterance(text);
    syntx.speak(utternace);
    }
    if(text.length > 50){
        if(syntx.speaking && isSpeaking){
            button.innerText = "Pause";
            syntx.resume();
            isSpeaking = false
        }
        else{
            button.innerText = "Resume";
            syntx.pause();
            isSpeaking = true
        }
    }
    else{
        isSpeaking = false
        button.innerText = "Speaking";
    }
    setInterval(() => {
        if(!syntx.speaking && isSpeaking){
            isSpeaking = true;
            button.innerText = "Conver to Speech";

        }
    })
};
button.addEventListener("click", textToSpeech);