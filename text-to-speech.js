const gTTS = require('gtts');
const path = require("path");
const sound = require("sound-play");
      
var speech = "Zelensky thanks European Commission president for the EU's tariff proposal for Ukraine";
var gtts = new gTTS(speech, 'en');
/*
gtts.save('Voice.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});*/

const filePath = path.join(__dirname, "Voice.mp3");

try {
    sound.play(filePath);
    console.log("done");
  } catch (error) {
    console.error(error);
  }


