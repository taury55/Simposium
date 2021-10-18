const fs = require('fs');
const ini = require('ini');
const express = require('express');
const app = express();

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));


app.get('/', async ({ query }, response) => {
	const { code } = query;

	if (code) {
		try {
			const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: config.api.discord_app_id,
					client_secret: config.api_discord_app_secret,
					code,
					grant_type: 'authorization_code',
					redirect_uri: config.api.discord_redirect,
					scope: 'identify',
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			const oauthData = await oauthResult.json();
			console.log(oauthData);
		} catch (error) {
			// NOTE: An unauthorized token will not throw an error;
			// it will return a 401 Unauthorized response in the try block above
			console.error(error);
		}
	}

	return;
});


app.listen(config.api.port, () => {
    console.log(`Server is up and listening on ${config.api.port}...`)
});
