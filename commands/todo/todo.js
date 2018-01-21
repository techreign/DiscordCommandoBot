const commando = require('discord.js-commando');
var fs = require('fs');	// from node.js, similar to an import of module 'fs'

class ToDoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'todo',
			group: 'todo',
			memberName: 'todo',
			description: 'View or add to the todo list'
		});
	}

	async run(message, args) {
		var viewOnly = true;
		if (args.length > 0) {
			var todoText = "- " + args + '\n';
			viewOnly = false;
		}

		// reading from the todolist.txt file and displaying it
		if (viewOnly) {
			fs.readFile('todolist.txt', 'utf8', function (err, content) {
				if (content) {
					message.channel.send(content)
						.then(msg => console.log('Said: ' + content))
						.catch(console.error);

				} 
				else { 
					var nothingText = "nothing to do";
					message.channel.send(nothingText)
						.then(msg => console.log('Said: ' + nothingText))
						.catch(console.error);
				}
			});
		}

		// adding to the todolist.txt file
		if (!viewOnly) {
			fs.appendFile('todolist.txt', todoText, function(err) {
				console.log('Added new todo item: ' + todoText);
				lenItems++;
			});
		}

		// todo: add delete and clear functionality

	}

}

module.exports = ToDoCommand;