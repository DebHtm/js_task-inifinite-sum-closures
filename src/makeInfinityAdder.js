'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function summer(b) {
    if (b === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += b;

    return summer;
  }

  return summer;
}

module.exports = makeInfinityAdder;
