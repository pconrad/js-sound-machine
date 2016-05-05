var JsSoundMachine = require('.');
var $ = require('jquery')

$(document).ready(function(){
  $("#theButton").click( function(){
  	var jsonString = $("#theTextArea").val();
    var parsedObject = JsSoundMachine.parseMusicJson(jsonString);
    console.log("Result = " + JSON.stringify(parsedObject));
  }); 
}); 