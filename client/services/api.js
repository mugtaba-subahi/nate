const config = require('../config.json');

module.exports.request = async content => {
  const url = new URL(config.server);
  url.search = new URLSearchParams(content.query);

  const options = {
    ...content,
    body: JSON.stringify(content.body)
  };

  const data = await fetch(url, options);
  return data.json();
};
