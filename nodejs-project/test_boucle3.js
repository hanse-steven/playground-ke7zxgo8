var assert = require('assert');
var mod = require('./boucles3.js');

	it("Tri des tableaux", function () {
		try
		{
			var tabloTest = [10,25,30,2,7,48,26,5,15,20,3];
			var tI = [];
			var tS = [];

			mod.sortNumbers( tabloTest, tI, tS );
			assert.deepEqual( [2,7,5,3].sort(), tI.sort() );
			assert.deepEqual( [10,25,30,48,26,15,20].sort(), tS.sort() );
		}
		catch (error)
		{
			printMessage('Conseil 💡', "Attention aux valeurs limites des tableaux 🤔");
			throw error;
		}
	});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
