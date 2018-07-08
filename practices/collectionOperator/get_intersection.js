'use strict';

function get_intersection(collection_a, collection_b) {
  let result = collection_b.filter(v => collection_a.includes(v));
  console.log(result.reverse());
  return result.reverse();
}

module.exports = get_intersection;
