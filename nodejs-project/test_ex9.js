let assert = require('assert');
let ex = require('./ex9.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction estIlMajeure", () => {
	try {
		assert.equal(false,ex.estIlMajeure(15));
		assert.equal(true,ex.estIlMajeure(20));
		assert.equal(true,ex.estIlMajeure(18));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction estIlMajeure")
	}
});




