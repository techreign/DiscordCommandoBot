const commando = require('discord.js-commando');

class SayCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'say',
			memberName: 'say',
			description: 'Says whatever the user wants it to.'
		});
	}

	async run(message, args) {
		var text = args;
		message.channel.send(text)
			.then(msg => console.log('Said: ' + text))
			.catch(console.error);
	}
}

module.exports = SayCommand;