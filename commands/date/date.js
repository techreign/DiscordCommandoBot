const commando = require('discord.js-commando');

class DateCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'date',
			group: 'date',
			memberName: 'date',
			description: 'Depicts the current date'
		});
	}

	async run(message, args) {
		var d = new Date();
		var	day = d.getDate();
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var currDate = month + '/' + day + "/" + year;
		message.channel.send(currDate)
			.then(msg => console.log('said: ' + currDate))
			.catch(console.error);
	}
}
module.exports = DateCommand;