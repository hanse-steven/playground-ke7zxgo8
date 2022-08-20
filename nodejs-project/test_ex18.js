let assert = require('assert');
let ex = require('./ex18.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction verificationPassword", () => {
	try {
		assert.equal(false,ex.verificationPassword("jj"));
		assert.equal(false,ex.verificationPassword("abcdefgh"));
		assert.equal(false,ex.verificationPassword("abcdefghxxxxx"));
		assert.equal(false,ex.verificationPassword("axxx"));
		assert.equal(true,ex.verificationPassword("azerty1Q"));
		assert.equal(false,ex.verificationPassword("azrty1Q"));
		assert.equal(true,ex.verificationPassword("azerty1QQQ"));
		assert.equal(false,ex.verificationPassword("AZERTY1QQQ"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction verificationPassword")
	}
});




