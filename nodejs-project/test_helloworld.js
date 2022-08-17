var assert = require('assert');
var mod = require('./helloworld.js');

it("Realisez la fonction helloworld", function () {
  try
  {
	assert.equal("Hello World!", mod.helloworld());
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
