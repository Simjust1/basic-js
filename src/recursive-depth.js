const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr/* arr */) {

    let index = 0;
      let depth = 1;
        if (Array.isArray(index)) {
           for (index of arr) {
          depth  += calculateDepth(depth);
          console.log(depth );
        }
      }
      return depth;
    }
  }

module.exports = {
  DepthCalculator
};
