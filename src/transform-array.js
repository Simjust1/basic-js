const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if(arr === null) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  if(arr === undefined) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  var transformed = Array.from(arr);

 if (typeof transformed === undefined)  {
  throw new Error ("'arr' parameter must be an instance of the Array!");
}

if (Object.getOwnPropertyNames(transformed).length === 0) {
 throw new Error ("'arr' parameter must be an instance of the Array!");
}

 console.log(transformed);

 for (let i = 0; i < transformed.length; i++) {
   if(transformed[i] === '--discard-next') {
       if(((transformed.indexOf('--discard-next') + 2) === (transformed.indexOf('--double-prev'))) || ((transformed.indexOf('--discard-next') + 2) === (transformed.indexOf('--discard-prev')))) {
         transformed.splice(i,1);
         transformed.splice(i,1);
         transformed.splice(i,1);
       }
       else {
         transformed.splice(i,1);
         if(transformed[i] !== undefined) {
         transformed.splice(i,1);
         }
       }
   }
   for (let y = 0; y < transformed[i].length; y++) {
     if(transformed[i][y] === '--discard-next') {
       transformed[i].splice(y,1);
       if(transformed[i][y] !== undefined) {
       transformed[i].splice(y,1);
       }
     }
   }
 }

 for (let i = 0; i < transformed.length; i++) {
   if(transformed[i] === '--double-next') {
      if(((transformed.indexOf('--double-next')) === (transformed.indexOf('--discard-prev')+2)) || ((transformed.indexOf('--double-next')) === (transformed.indexOf('--double-prev')+2))) {
       transformed.splice(i,3);
     }
     else {
       transformed.splice(i,1);
       if(transformed[i] !== undefined) {
       transformed.splice(i,0,transformed[i]);
       }
     }
   }
   for (let y = 0; y < transformed[i].length; y++) {
     console.log(transformed[i].length);
     if(transformed[i][y] === '--double-next') {
        transformed[i].splice(y,1);
       if(transformed[i][y] !== undefined && y < transformed[i].length) {
           transformed[i].splice(y,0,transformed[i][y]);
       }
       else {
         break;
       }
     }
   }
 }

   for (let i = 0; i < transformed.length; i++) {
     if(transformed[i] === '--discard-prev') {
         transformed.splice(i,1);
         if(transformed[i-1] !== undefined) {
         transformed.splice(i-1,1);
         }
       }

     for (let y = 0; y < transformed[i].length; y++) {
       if(transformed[i][y] === '--discard-prev') {
         transformed[i].splice(y,1);
         if(transformed[y-1] !== undefined) {
             transformed[i].splice(y-1,1);
         }
       }
     }
   }

 for (let i = 0; i < transformed.length; i++) {
   if(transformed[i] === '--double-prev') {
     if(transformed[i-1] !== undefined) {
       transformed.splice(i,1,transformed[i-1]);
     }
     else {
       transformed.splice(i,1);
     }
   }
   for (let y = 0; y < transformed[i].length; y++) {
     if(transformed[i][y] === '--double-prev') {
       if(transformed[i][y-1] !== undefined) {
         transformed[i].splice(y,1,transformed[i][y-1]);
         }
       else {
         transformed[i].splice(y,1)
       }
     }
   }
 }
 return transformed;
}

module.exports = {
  transform
};
