let assert = require('assert');
let ex = require('./ex13.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction premierElementTableau", () => {
	try {
		assert.equal(1,ex.premierElementTableau([1,2]));
		assert.equal(-10,ex.premierElementTableau([-10,10]));
		assert.equal(null,ex.premierElementTableau([]));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction premierElementTableau")
	}
});




