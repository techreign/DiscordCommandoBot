const commando = require('discord.js-commando');

class SpamCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'spam',
			group: 'spam',
			memberName: 'spam',
			description: 'Spams a phrase x amount of times'
		});
	}

	async run(message, args) {
		var splitArgs = args.split(" ");
		var spamNum = parseInt(splitArgs.shift());
		var spamText = splitArgs.join(' ') + ' ';
		var spammedText = spamText.repeat(spamNum);
		message.channel.send(spammedText)
			.then(msg => console.log('Spammed ' + spamText + spamNum + ' times'))
			.catch(console.error);
	}
}
module.exports = SpamCommand;