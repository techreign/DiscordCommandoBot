const commando = require('discord.js-commando');

class RickrollCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'rickroll',
			group: 'rickroll',
			memberName: 'rickroll',
			description: 'Post a video of Rick Astley - Never Gonna Give You Up'
		});
	}

	async run(message, args) {

		var link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		message.channel.send(link)
			.then(msg => console.log('Rick rolled!'))
			.catch(console.error);
	}
}
module.exports = RickrollCommand;

