'use strict';

function choose_even(collection) {
  const result = collection.filter(ele => ele % 2 === 0);
  return result;
}

module.exports = choose_even;
