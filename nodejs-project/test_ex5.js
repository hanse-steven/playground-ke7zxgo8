let assert = require('assert');
let ex = require('./ex5.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction concatenation", () => {
	try {
		assert.equal("steven hanse",ex.concatenationAvecEspace("steven","hanse"));
		assert.equal("jade gomez",ex.concatenationAvecEspace("jade","gomez"));
		assert.equal("pas idees",ex.concatenationAvecEspace("pas","idees"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction concatenation")
	}
});




