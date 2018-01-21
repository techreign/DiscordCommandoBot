const commando = require('discord.js-commando');
var tw = require('../../API/twetter.js');

class TwetCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'twet',
			group: 'twet',
			memberName: 'twet',
			description: 'Gets the latest tweet on topic x'
		});
	}

	async run(message, args) {

		var twe = new tw();
		var ans = await twe.getTweet(args);
		message.channel.send(ans)
			.then(msg => console.log('Got your tweet'))
			.catch(console.error);
	}
}
module.exports = TwetCommand;