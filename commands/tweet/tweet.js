const commando = require('discord.js-commando');
var tw = require('../../API/twetter.js');

class TweetCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'tweet',
			group: 'tweet',
			memberName: 'tweet',
			description: 'Post tweet x'
		});
	}

	async run(message, args) {

		var twe = new tw();
		var ans = twe.doTweet(args);
		message.channel.send("tweeted out!")
			.then(msg => console.log('Posted your tweet!'))
			.catch(console.error);
	}
}
module.exports = TweetCommand;