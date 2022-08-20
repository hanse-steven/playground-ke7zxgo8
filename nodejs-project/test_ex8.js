var assert = require('assert');
var ex = require('./ex8.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction multiplication", () => {
	try {
		assert.equal(75,ex.multiplication(15,5));
		assert.equal(20,ex.multiplication(20,1));
		assert.equal(108,ex.multiplication(18,6));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction multiplication")
	}
});




