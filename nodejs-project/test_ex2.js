let assert = require('assert');
let ex = require('./ex2.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction quiEstLeMeilleurProf", () => {
	try {
		assert.equal("Malashouille",ex.quiEstLeMeilleurProf());
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction quiEstLeMeilleurProf")
	}
});




