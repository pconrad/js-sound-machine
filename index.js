

module.exports = {
  parseMusicJson: function(jsonString) {
    var jsonObject = JSON.parse(jsonString);
    return jsonObject;
	},

  playNote: function(note) {
		console.log("Note: " + JSON.stringify(note));

	},

  playMelody: function(jsonObject,melody) {
	    var melody = jsonObject.melodies[melody];
         $.each(melody, function (note) {
			 module.exports.playNote(this);
		 });
	}



};

