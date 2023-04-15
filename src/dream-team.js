const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array/* members */) {

  if(array === null && array === false && array === undefined) {
      return false;
    }

if (!Array.isArray(array)) {return false};

  let array1 = array.filter(el => { if(typeof el === 'string') {return true; } return false; });
  array1 = array1.map(el => el.trim().slice(0,1));
  array1 = array1.map(el => el[0].toUpperCase());
  array1 = array1.sort();
  const str = array1.join('');
  return str;
}

module.exports = {
  createDreamTeam
};
