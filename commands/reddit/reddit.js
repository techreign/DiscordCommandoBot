const commando = require('discord.js-commando');
var config = require('../../config.js');
var reddit = require('redwrap');

class RedditCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'reddit',
			group: 'reddit',
			memberName: 'reddit',
			description: 'Retrieves submission x from reddit'
		});
	}

	async run(message, args) {

		reddit.r(args +'/new', function(err, data, res){
			var info = data;
			var proceed = true;
			if (info.error == 403 || info.error == 404) {
				message.channel.send(info.message)
					.then(msg => console.log('Subreddit could not be accessed'))
					.catch(err);
				proceed = false;
			}
			if (proceed) {
				var reddit_info = info.data.children[0].data.title;
				var reddit_link = info.data.children[0].data.url;
				var presentable = reddit_info + '\n' + reddit_link;
				message.channel.send(presentable)
					.then(msg => console.log('Recieved submission from reddit'))
					.catch(err);
					}
			});


	}
}
module.exports = RedditCommand;