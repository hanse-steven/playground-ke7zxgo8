let assert = require('assert');
let ex = require('./ex17.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction verificationPassword", () => {
	try {
		assert.equal(false,ex.verificationPassword(""));
		assert.equal(true,ex.verificationPassword("abcdefgh"));
		assert.equal(true,ex.verificationPassword("abcdefghxxxxx"));
		assert.equal(false,ex.verificationPassword("axxx"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction verificationPassword")
	}
});




