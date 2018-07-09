'use strict';
var map_to_four_multiples_add_one = function(collection){
  const map1 = collection.map(x => x * 4+1);
  return map1;
};

module.exports = map_to_four_multiples_add_one;
