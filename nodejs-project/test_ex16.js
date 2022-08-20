let assert = require('assert');
let ex = require('./ex16.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction plusPetit", () => {
	try {
		assert.equal(1,ex.plusPetit([1,1]));
		assert.equal(1,ex.plusPetit([10,1]));
		assert.equal(5,ex.plusPetit([5,20]));
		assert.equal(null,ex.plusPetit([]));
		assert.equal(1,ex.plusPetit([1,2,3,4,5,6,10]));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction plusPetit")
	}
});




