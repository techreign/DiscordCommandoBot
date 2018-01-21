const commando = require('discord.js-commando');
var YouTube = require('youtube-node');

class YoutubeCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'youtube',
			group: 'youtube',
			memberName: 'youtube',
			description: 'Retrieves video x from youtube'
		});
	}

	async run(message, args) {

		var youTube = new YouTube();
		youTube.setKey('AIzaSyCgrpQ2YI_Ck7zeFK1BilUu_cGAjFL3AfU');
		youTube.addParam({type: "video"});
		youTube.search(args, 1, function(error, result) {
			  if (error) {
				console.log(error);
			  }
			  else {
				console.log(JSON.stringify(result, null, 2))
				var title = JSON.stringify(result.items[0].snippet.title, null, 2);
				var links = "https://www.youtube.com/watch?v=" + "" + result.items[0].id.videoId;
				message.channel.send(title + '\n' + links)
					.then(msg => console.log('Received video from youtube'))
					.catch(console.error);
			  }
			});

	}
}
module.exports = YoutubeCommand;