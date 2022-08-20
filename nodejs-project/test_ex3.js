let assert = require('assert');
let ex = require('./ex3.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction jeRetourneMonArgument", () => {
	try {
		assert.equal("abc",ex.jeRetourneMonArgument("abc"));
		assert.equal(5677,ex.jeRetourneMonArgument(5677));
		assert.equal(true,ex.jeRetourneMonArgument(true));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction jeRetourneMonArgument")
	}
});




