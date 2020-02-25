# Twitter Hashtags - Server

API for [**Twitter Hashtags**](https://github.com/lcandiago/twitter-hashtags-client)

## ✨ API

- To use the API, use the following address:

`https://twitter-hashtags-server.herokuapp.com/tweets?hashtags=javascript&hashtags=nodejs`

## 🚀 Getting Started

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/lcandiago/twitter-hashtags-server)

Using npm:

```bash
$ npm install
```

### `npm run dev`

Runs the app in the development mode.

### Change .env

Duplicate `.env.example` and rename to `.env`

Follow the [Twitter Developer](https://developer.twitter.com/en.html) documentation to get the keys and change them on `.env`

## 📝 Using the Endpoint

There are only one endpoint:

`/tweets`

And it accepts query params labeled by `hashtags`.

You can add as many hashtags as you want to fetch the respective tweets:

`/tweets?hashtags=javascript&hashtags=nodejs`

