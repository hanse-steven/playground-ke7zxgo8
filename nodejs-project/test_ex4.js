var assert = require('assert');
var ex4 = require('./ex4.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction concatenation", () => {
	try {
		assert.equal("stevenhanse",ex4.concatenation("steven","hanse"));
		assert.equal("jadegomez",ex4.concatenation("jade","gomez"));
		assert.equal("pasidees",ex4.concatenation("pas","idees"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction concatenation")
	}
});




