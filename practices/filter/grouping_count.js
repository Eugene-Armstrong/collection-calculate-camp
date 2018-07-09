'use strict';

function grouping_count(collection) {
  var count = collection.reduce(function (eles, ele) {
    if (ele in eles) {
      eles[ele]++;
    }
    else {
      eles[ele] = 1;
    }
    return eles;
  }, {});
  return count;
}

module.exports = grouping_count;
