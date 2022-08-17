var assert = require('assert');
var ex1 = require('./ex1.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction helloworld", () => {
	try {
		assert.equal("Hello World!", ex1.helloworld());
	}
	catch (error) {
		printMessage('Conseil 💡', "Revoyez la fonction helloworld 🤔");
		throw error;
	}
});




