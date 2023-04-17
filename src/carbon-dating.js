const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {

  if(typeof n !== "string") {
    return false;
  }

  if (n.match(/[a-z]/i)) {
    return false;
  }

  if (!(n.match(/[0-9]/i))) {
    return false;
  }

  if(n > 15 || n <= 0) {
    return false;
  }

  let mt = Math.ceil((Math.log(15/n)) / (0.693/5730));

  return mt;

  }

module.exports = {
  dateSample
};
