const commando = require('discord.js-commando');

class RockPaperScizzorCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'rps',
			group: 'rps',
			memberName: 'rps',
			description: 'Plays rps'
		});
	}

	async run(message, args) {
		var roll = Math.floor(Math.random() * 3) + 1;
		if (roll == 1) message.reply("Rock!"); 
		if (roll == 2) message.reply("Paper!");
		if (roll == 3) message.reply("Scizzors!");
		console.log("Played RPS");
	}
}

module.exports = RockPaperScizzorCommand;