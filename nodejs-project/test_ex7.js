let assert = require('assert');
let ex = require('./ex7.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction soustraction", () => {
	try {
		assert.equal(10,ex.soustraction(15,5));
		assert.equal(19,ex.soustraction(20,1));
		assert.equal(12,ex.soustraction(18,6));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction soustraction")
	}
});




