const transform = require('./transform');

module.exports = content => {
  const result = {};

  const contentArray = transform(content);

  // create hashmap from array
  contentArray.forEach(word => {
    const regex = /^$|^'.*'$|^'/; // empty string, apostrephe

    if (word.match(regex)) return;
    if (!word.match(/[a-z]/)) return; // removes emojies, symbols and non-English languages
    if (word.endsWith("'")) word = word.replace(/'$/, ''); // remove apostrophe at end of word

    if (!result[word]) result[word] = 1;
    else result[word]++;
  });

  return result;
};
