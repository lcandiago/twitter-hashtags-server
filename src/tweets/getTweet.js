const T = require('../../config/twit');

module.exports = async (req, res) => {
  if (!req.query.hashtags) {
    return res.status(400).json({ error: 'Informe uma Hashtag' });
  }

  const { hashtags } = req.query;

  const hashtagQuery =
    typeof hashtags === 'object'
      ? hashtags.map(hashtag => `#${hashtag}`).join(' OR ')
      : `#${hashtags}`;

  const { data } = await T.get('search/tweets', {
    q: `${hashtagQuery} -filter:links -filter:replies -filter:retweets`,
    tweet_mode: 'extended',
    count: 20,
  });

  if (!data) {
    return res.status(500).json({
      error: `Erro ao buscar hashtags: ${hashtags}`,
    });
  }

  if (!data.statuses.length) {
    return res.status(404).json({
      error: `Nenhum tweet encontrado com as hashtags: ${hashtags}`,
    });
  }

  const tweets = data.statuses.map(status => {
    const { id, full_text, created_at } = status;
    const { name, screen_name, profile_image_url_https } = status.user;
    return {
      id,
      full_text,
      user: {
        name,
        screen_name,
        profile_image_url_https,
      },
      created_at,
    };
  });

  return res.json(tweets);
};
