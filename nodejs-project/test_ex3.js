let assert = require('assert');
let ex = require('./ex3.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction jeRetourneMonArgument", () => {
	try {
		assert.equal("123",ex.jeRetourneMonArgument("123"));
		assert.equal("abc",ex.jeRetourneMonArgument("abc"));
		assert.equal("jate",ex.jeRetourneMonArgument("jate"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction jeRetourneMonArgument")
	}
});




