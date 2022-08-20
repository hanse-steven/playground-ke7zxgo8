let assert = require('assert');
let ex = require('./ex19.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction capital", () => {
	try {
		assert.equal("Paris",ex.capital("France"));
		assert.equal("Berlin",ex.capital("Allemagne"));
		assert.equal("Rome",ex.capital("Italie"));
		assert.equal("Rabat",ex.capital("Maroc"));
		assert.equal("Madrid",ex.capital("Espagne"));
		assert.equal("Lisbonne",ex.capital("Portugal"));
		assert.equal("Londres",ex.capital("Angleterre"));
		assert.equal("Inconnu	",ex.capital("Inconnu"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction capital")
	}
});




