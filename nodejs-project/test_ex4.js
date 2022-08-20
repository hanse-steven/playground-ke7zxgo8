let assert = require('assert');
let ex = require('./ex4.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction concatenation", () => {
	try {
		assert.equal("stevenhanse",ex.concatenation("steven","hanse"));
		assert.equal("jadegomez",ex.concatenation("jade","gomez"));
		assert.equal("pasidees",ex.concatenation("pas","idees"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction concatenation")
	}
});




