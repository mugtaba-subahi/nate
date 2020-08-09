const request = require('request-promise');
const htmlToText = require('html-to-text');

const count = require('./helpers/hashmap');
const sort = require('./helpers/sort');

module.exports.handler = async (event, context) => {
  try {
    event.body = JSON.parse(event.body);
    event.queryStringParameters = event.queryStringParameters || {};

    const content = await request(event.body.url);
    const text = htmlToText.fromString(content);
    const data = count(text);

    const result = [];

    // convert from hashmap to array for sorting
    for (const key in data) {
      result.push({
        word: key,
        count: data[key]
      });
    }

    let sorted = !event.queryStringParameters.sort ? sort(result) : null;

    if (event.queryStringParameters.sort) {
      const [property, direction] = event.queryStringParameters.sort.split(',');
      sorted = sort(result, property, direction);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(sorted)
    };
  } catch (error) {
    throw error;
  }
};
