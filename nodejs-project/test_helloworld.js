var assert = require('assert');
var mod = require('./helloworld');

it("Réalisez la fonction puissance", function () {
  try
  {
	assert.equal("Hello World!", mod.helloWorld());
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez la fonction helloworld 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
