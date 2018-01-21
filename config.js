// fill out these login information with your own credentials

// twitter login
var twitter_login = {
	consumer_key:         '',
  	consumer_secret:      '',
  	access_token:         '-',
  	access_token_secret:  '',
  	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}

// reddit login
var reddit_login = {
	client_id: '',
	client_secret: '', 
	user_agent: ''
}

module.exports = {twitter_login, reddit_login}