let assert = require('assert');
let ex = require('./ex6.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction somme", () => {
	try {
		assert.equal(20,ex.somme(15,5));
		assert.equal(21,ex.somme(1,20));
		assert.equal(24,ex.somme(18,6));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction somme")
	}
});




