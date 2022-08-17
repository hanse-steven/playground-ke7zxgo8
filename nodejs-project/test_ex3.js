var assert = require('assert');
var ex3 = require('./ex3.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction jeRetourneMonArgument", () => {
	try {
		assert.equal("123",ex3.jeRetourneMonArgument("123"));
		assert.equal("abc",ex3.jeRetourneMonArgument("abc"));
		assert.equal("jate",ex3.jeRetourneMonArgument("jate"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction jeRetourneMonArgument")
	}
});




