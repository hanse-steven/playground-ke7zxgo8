let assert = require('assert');
let ex = require('./ex1.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction helloworld", () => {
	try {
		assert.equal("Hello World!", ex.helloworld());
	}
	catch (error) {
		printMessage('Conseil 💡', "Revoyez la fonction helloworld 🤔");
		throw error;
	}
});




