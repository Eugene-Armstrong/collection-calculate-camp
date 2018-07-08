'use strict';

function choose_multiples_of_three(collection) {
  const result = collection.filter(ele => ele % 3 === 0);
  return result;
}

module.exports = choose_multiples_of_three;
