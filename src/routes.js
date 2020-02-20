import { Router } from 'express';

import getTweets from './tweets/getTweet';

const routes = new Router();

routes.get('/tweets', getTweets);

export default routes;
