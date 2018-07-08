'use strict';

function collect_all_even(collection) {
  const result = collection.filter(ele => ele % 2 === 0);
  return result;
}

module.exports = collect_all_even;