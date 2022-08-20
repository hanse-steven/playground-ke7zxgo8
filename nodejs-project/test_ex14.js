let assert = require('assert');
let ex = require('./ex14.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction dernierElementTableau", () => {
	try {
		assert.equal(2,ex.dernierElementTableau([1,2]));
		assert.equal(10,ex.dernierElementTableau([-10,10]));
		assert.equal(null,ex.dernierElementTableau([]));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction dernierElementTableau")
	}
});




