let assert = require('assert');
let ex = require('./ex15.js');

function printMessage(channel, message) {
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

it("Realise la fonction plusGrand", () => {
	try {
		assert.equal(1,ex.plusGrand([1,1]));
		assert.equal(10,ex.plusGrand([10,1]));
		assert.equal(20,ex.plusGrand([5,20]));
		assert.equal(null,ex.plusGrand([]));
		assert.equal(null,ex.plusGrand([1,2,3,4,5,6,10]));
	}
	catch (error) {
		printMessage('Conseil 💡',"Revoyer la fonction plusGrand")
	}
});




