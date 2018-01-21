var Twit = require('twit');
var config = require('../config.js');

class Twetter {

	constructor() {
		this.T = new Twit(config.twitter_login);
	}

	async doTweet(info) {

		var tweet = { 
		status: info
		}

		// makes a post from your account saying tweet
		this.T.post('statuses/update', tweet, tweeted);

		function tweeted(err, data, response) {
			if (err) {
				console.log("Something went wrong");
			} else {
				console.log("It worked!");
			}
		}
	}

	async getTweet(info) {
		var search_params = {
			q:	info,
			count: 1
		}
		var text = "nothing to see here..."
		async function search(err, data, response) {
			if (err) {
				console.log("Something went wrong");
			} else {
				var tweets = data.statuses;
				if (tweets[0].text) {
					var result = tweets[0].text;
					var screen_name = tweets[0].user.screen_name;
					text = result + '\nby: @' + screen_name;
				}
			}
		}
		await this.T.get('search/tweets', search_params, await search);
		return text;
	}
	
}
module.exports = Twetter;