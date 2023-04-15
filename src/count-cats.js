const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array/* matrix */) {
  //throw new NotImplementedError('Not implemented');


  let number;
  let array1 = [];

    for (let i = 0; i < array.length; i++) {
      for (let y = 0; y < array[i].length; y++) {
      array1.push(array[i][y]);
      }
    }

  for(let i = 0; i < array1.length; i++) {
      number = array1.filter(e => {
        if(e === '^^') {
        return true;
        }
        else if(array1 === []) {
          return 0;
        }
        return false;
      }).length;


       return number;
  };

    if(array1 === undefined || array1.length == 0) {
          return number = 0;
        }


  // remove line with error and write your code here
}

module.exports = {
  countCats
};
