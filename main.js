var JsSoundMachine = require('.');
var $ = require('jquery')
var Gibberish = require("gibberish-dsp");

Gibberish.init();                   
Gibberish.Binops.export();          
Gibberish.Time.export()


$(document).ready(function(){
  $("#theButton").click( function(){
		  
	var jsonString = $("#theTextArea").val();
    var parsedObject = JsSoundMachine.parseMusicJson(jsonString);
    console.log("Result = " + JSON.stringify(parsedObject));
    
    JsSoundMachine.playMelody(Gibberish,parsedObject,"frere_jaques"); 
  }); 
}); 