import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  port: process.env.PORT,
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    tokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  },
  webClient: {
    url: process.env.WEB_CLIENT_URL,
  },
};
