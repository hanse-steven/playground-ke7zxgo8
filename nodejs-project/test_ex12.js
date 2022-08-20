let assert = require('assert');
let ex = require('./ex12.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction plusPetit", () => {
	try {
		assert.equal(15,ex.plusPetit(15,25,56));
		assert.equal(5,ex.plusPetit(20,10,5));
		assert.equal(-9,ex.plusPetit(18,256,-9));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction plusPetit")
	}
});




