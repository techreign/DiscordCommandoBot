const commando = require('discord.js-commando');

class AnnounceCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'announce',
			group: 'announce',
			memberName: 'announce',
			description: 'Announces whatever the user wants it to.'
		});
	}

	async run(message, args) {
		var text = args;
		message.channel.send(text, {tts: true})
			.then(msg => console.log('TTS: ' + text))
			.catch(console.error);
	}
}

module.exports = AnnounceCommand;