let assert = require('assert');
let ex = require('./ex11.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction plusPetit", () => {
	try {
		assert.equal(15,ex.plusPetit(15,25));
		assert.equal(10,ex.plusPetit(20,10));
		assert.equal(18,ex.plusPetit(18,256));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction plusPetit")
	}
});




