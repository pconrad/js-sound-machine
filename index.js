

module.exports = {
  parseMusicJson: function(jsonString) {
    var jsonObject = JSON.parse(jsonString);
    return jsonObject;
	},

  noteToFreq : {
	  "A4" : 440,
      "B4" : 493.88,
      "C#5" : 554.37,
      "D5" : 587.33,
      "E5" : 659.26,
      "F#5" :  739.99,
      "E4": 329.63
  },

  playMelody: function(Gibberish,jsonObject,melody) {

		module.exports.sequencerDemo(Gibberish);

		a = new Gibberish.FMSynth().connect();
	    var melody = jsonObject.melodies[melody];
        var values = [440.0];
        var durations = []; 
         $.each(melody, function (note) {
			   if (this.name) {
				 values.push(module.exports.noteToFreq[this.name]);
				 durations.push(ms(this.duration * 1000));
			   }
		 });
        console.log("durations = " + JSON.stringify(durations) 
                    + "values=" + JSON.stringify(values));
		b = new Gibberish.Sequencer({
				target:a, key:'note',
				values: values,
				durations: durations,
				}).start(); 
		
	},

  sequencerDemo: function(Gibberish) {

		a = new Gibberish.FMSynth().connect();

		b = new Gibberish.Sequencer({
				target:a, key:'note',
				values:[880,660,440,220],
				durations:[ ms(500), ms(250), ms(1000) ],
			}).repeat(2).start();
	}


};

