const commando = require('discord.js-commando');
var fs = require('fs');	// from node.js, similar to an import of module 'fs'

const bot = new commando.Client({
	owner: ''
});


bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('rps', 'Rps');
bot.registry.registerGroup('idle', 'Idle');
bot.registry.registerGroup('say', 'Say');
bot.registry.registerGroup('announce', 'Announce');
bot.registry.registerGroup('spam', 'Spam');
bot.registry.registerGroup('todo', 'Todo');
bot.registry.registerGroup('timer', 'Timer');
bot.registry.registerGroup('date', 'Date');
bot.registry.registerGroup('twet', 'Twet');
bot.registry.registerGroup('tweet', 'Tweet');
bot.registry.registerGroup('ghibli', 'Ghibli');
bot.registry.registerGroup('ghibli', 'Ghibli');
bot.registry.registerGroup('reddit', 'Reddit');
bot.registry.registerGroup('youtube', 'Youtube');
bot.registry.registerGroup('rickroll', 'Rickroll');


// registers all built-in groups, commands, and argument types
bot.registry.registerDefaults();
// registers all of the commands in the ./commands/ directory
bot.registry.registerCommandsIn(__dirname + "/commands");

// login! (to discord)
bot.login('');
