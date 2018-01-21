const commando = require('discord.js-commando');

class IdleCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'idle',
			group: 'idle',
			memberName: 'idle',
			description: 'Sets bots status to idle'
		});
	}

	async run(message, args) {
		message.channel.send("I am now idle... too bad my status can not be changed anymore.")
			.then(msg => console.log('Sent a message in the channel'))
			.catch(console.error);
	}
}
module.exports = IdleCommand;