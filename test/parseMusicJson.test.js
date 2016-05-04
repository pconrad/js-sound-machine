var JsSoundMachine = require('..');

var chai = require("chai"),
	expect = chai.expect;


describe('parseMusicJson', function() {

		it('should return a reasonable json object', function() {
			
            var fs = require("fs");
            var contents = fs.readFileSync('examples/format.json');			
			var thing = JsSoundMachine.parseMusicJson(contents);
			expect(thing).to.include.keys('melodies');
			expect(thing.melodies).to.include.keys('frere_jaques');

		});

});
