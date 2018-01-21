const commando = require('discord.js-commando');
var https = require('https');
// studio ghibli API requires no authentication (oh thank god!)
const url = "ghibliapi.herokuapp.com";

class GhibliCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'ghibli',
			group: 'ghibli',
			memberName: 'ghibli',
			description: 'Gets cool studio ghibli stuff'
		});
	}

	async run(message, args) {

		var options = {
			host: url,
		    path: '/films'
		};

		var req = https.get(options, function(res) {
			var bodyChunks = [];
			res.on('data', function(chunk) {
				bodyChunks.push(chunk);
				}).on('end', function() {
					var body = Buffer.concat(bodyChunks);
					var i = Math.floor(Math.random() * 21);
					var title = JSON.parse(body)[i].title;
					message.channel.send(title)
						.then(msg => console.log('Studio GHIBLI!'))
						.catch(console.error);
				})
		});

	}

}
module.exports = GhibliCommand;