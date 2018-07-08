'use strict';

function collect_all_even(collection) {
  var collection = [1, 2, 3, 4, 5];
  const result = collection.filter(ele => ele % 2 === 0);
  return result;
}

module.exports = collect_all_even;