const { Router } = require('express');

const getTweets = require('./tweets/getTweet');

const routes = new Router();

routes.get('/tweets', getTweets);

module.exports = routes;
