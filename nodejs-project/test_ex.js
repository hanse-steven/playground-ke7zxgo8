var assert = require('assert');
var ex1 = require('./ex1.js');
var ex2 = require('./ex2.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction helloworld", function () {
	try {
		assert.equal("Hello World!", ex1.helloworld());
	}
	catch (error) {
		printMessage('Conseil 💡', "Revoyez la fonction helloworld 🤔");
		throw error;
	}
});

it("Realise la fonction quiEstLeMeilleurProf", () => {
	try {
		assert.equal("Malashouille",ex.quiEstLeMeilleurProf());
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction quiEstLeMeilleurProf")
	}
});




