module.exports = (array, property = 'count', direction = 'desc') => {
  return array.sort((left, right) => {
    if (direction === 'asc') {
      if (left[property] < right[property]) return -1;
      if (left[property] > right[property]) return 1;
    } else if (direction === 'desc') {
      if (left[property] < right[property]) return 1;
      if (left[property] > right[property]) return -1;
    }
  });
};
