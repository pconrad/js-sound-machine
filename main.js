var JsSoundMachine = require('.');
var $ = require('jquery')
var Gibberish = require("gibberish-dsp");

Gibberish.init();                   // convenience method to start audio callback 
Gibberish.Binops.export();          // export math functions into global namespace 

function gibberishDemo() {
    mod = new Gibberish.Sine( 5, 15 );  // sine wave, 5 Hz, 15 amplitude 
    sine = new Gibberish.Sine({         // sine wave with frequency modulated by mod 
       frequency: Add( 440, mod ), 
       amp: .4 
     }); 
 
   delay = new Gibberish.Delay({ input:sine });     
   reverb = new Gibberish.Reverb({ input:delay });  
   reverb.connect();                                
}


$(document).ready(function(){
  $("#theButton").click( function(){
  	var jsonString = $("#theTextArea").val();
    var parsedObject = JsSoundMachine.parseMusicJson(jsonString);
    console.log("Result = " + JSON.stringify(parsedObject));
    JsSoundMachine.playMelody(parsedObject,"frere_jaques");
    /* gibberishDemo();   */
  }); 
}); 