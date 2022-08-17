var assert = require('assert');
var ex2 = require('./ex2.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction quiEstLeMeilleurProf", () => {
	try {
		assert.equal("Malashouille",ex2.quiEstLeMeilleurProf());
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction quiEstLeMeilleurProf")
	}
});




