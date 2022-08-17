var assert = require('assert');
var ex5 = require('./ex5.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction concatenation", () => {
	try {
		assert.equal("steven hanse",ex5.concatenation("steven","hanse"));
		assert.equal("jade gomez",ex5.concatenation("jade","gomez"));
		assert.equal("pas idees",ex5.concatenation("pas","idees"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction concatenation")
	}
});




