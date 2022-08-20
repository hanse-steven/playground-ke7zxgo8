let assert = require('assert');
let ex = require('./ex10.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction plusGrand", () => {
	try {
		assert.equal(25,ex.plusGrand(15,25));
		assert.equal(20,ex.plusGrand(20,10));
		assert.equal(256,ex.plusGrand(18,256));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction plusGrand")
	}
});




