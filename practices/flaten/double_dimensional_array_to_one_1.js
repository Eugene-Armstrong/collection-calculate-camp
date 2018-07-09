'use strict';

function double_to_one(collection) {
  var flattened = collection.reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  return flattened;
}

module.exports = double_to_one;
