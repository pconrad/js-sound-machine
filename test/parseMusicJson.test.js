var JsSoundMachine = require('..');

var chai = require("chai"),
	expect = chai.expect;


describe('parseMusicJson', function() {

		it('should return a reasonable json object', function() {
			var thing = JsSoundMachine.parseMusicJson('examples/format.json');
			expect(thing).to.include.keys('melodies');
			expect(thing.melodies).to.include.keys('frere_jaques');

		});

});
