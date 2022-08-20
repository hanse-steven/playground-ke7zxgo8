let assert = require('assert');
let ex = require('./ex20.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction listHTML", () => {
	try {
		assert.equal("<h3>Capitale</h3><ul><li>Paris</li><li>Berlin</li><li>Moscou</li></ul>",ex.listHTML("Capitale",["Paris", "Berlin", "Moscou"]));
		assert.equal("<h3>Burger</h3><ul><li>BigMac</li><li>Fish</li><li>Beacon</li></ul>",ex.listHTML("Burger",["BigMac", "Fish", "Beacon"]));
		assert.equal("<h3>Burger</h3><ul><li>BigMac</li></ul>",ex.listHTML("Burger",["BigMac"]));
		assert.equal(null,ex.listHTML("",["BigMac"]));
		assert.equal(null,ex.listHTML(null,["BigMac"]));
		assert.equal(null,ex.listHTML("truc",[]));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction listHTML")
	}
});




