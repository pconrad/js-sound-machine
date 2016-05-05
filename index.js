

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

  playMelody: function(Gibberish,jsonObject,melody,msPerBeat) {

		a = new Gibberish.FMSynth().connect();
	    var melody = jsonObject.melodies[melody];
        var notes = [];
        var durations = []; 
        var amps = [];
         $.each(melody, function (note) {
			   if (this.name) {
				 notes.push(module.exports.noteToFreq[this.name]);
				 durations.push(ms(this.duration * msPerBeat));
                 amps.push(0.9);
			   } else {
				   notes.push(55.0); 
                   durations.push(ms(this.rest * msPerBeat)); 
				   amps.push(0.0);
			   }
			   console.log(JSON.stringify(note));
		 });
		
		var sequencerParams = {
				target:a, 
				durations: durations,
				keysAndValues: {
					'note' : notes,
	                'amp'  : amps
			}
		};
	   
		b = new Gibberish.Sequencer(sequencerParams).repeat(durations.length).start();
		
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

