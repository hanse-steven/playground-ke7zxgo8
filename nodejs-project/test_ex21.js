let assert = require('assert');
let ex = require('./ex21.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction remplacerLesLettres", () => {
	try {
		assert.equal("W3sh C0us1n",ex.remplacerLesLettres("Wesh Cousin"));
		assert.equal("C0usc0us du bl3d",ex.remplacerLesLettres("Couscous du bled"));
		assert.equal("Salad3 t0mat3 01gn0n",ex.remplacerLesLettres("Salade tomate oignon"));
		assert.equal("3N MAJUSCUL3 AUSS1 CA MARCH3 N0RMAL3M3NT",ex.remplacerLesLettres("EN MAJUSCULE AUSSI CA MARCHE NORMALEMENT"));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction remplacerLesLettres")
	}
});




