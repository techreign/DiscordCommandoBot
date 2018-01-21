const commando = require('discord.js-commando');

class TimerCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'timer',
			group: 'timer',
			memberName: 'timer',
			description: 'Starts a timer of a set amount of time'
		});
	}

	async run(message, args) {
		var timer = parseInt(args);
		var textToDisplay;
		setTimeout(function(){
			if (args != 1) {
				textToDisplay = timer + " seconds are up";
			} else {
				textToDisplay = "1 second is up";
			}
			message.channel.send(textToDisplay)
				.then(msg => console.log("finished timer"))
				.catch(console.error);}
									, timer * 1000);
	}
}
module.exports = TimerCommand;