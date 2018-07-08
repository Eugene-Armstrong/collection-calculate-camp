'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a.slice();
  collection_b.forEach(v => { !result.includes(v) && result.push(v) });
  console.log(result);
  return result;
}

module.exports = get_union;

