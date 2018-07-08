'use strict';

function choose_no_repeat_number(collection) {
  let tempArr = [] ;
  let result = collection.filter(v=>tempArr.includes(v)?false:tempArr.push(v))
  return result;
}

module.exports = choose_no_repeat_number;
