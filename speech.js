// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-IN";
  voice.volume = 0;
  voice.rate = 1;
  voice.pitch = 1; 
  synth.speak(voice);
}