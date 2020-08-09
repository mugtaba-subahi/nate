module.exports = content => {
  const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~(\r\n|\n|\r)]|[0-9]/g; // \n line breaks, numbers and punctuation except apostrophe
  return content.toLowerCase().replace(regex, ' ').split(' ');
};
