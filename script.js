// // /**
// //  * @param {Promise} promise1
// //  * @param {Promise} promise2
// //  * @return {Promise}
// //  */
// // var addTwoPromises = async function(promise1, promise2) {
// //     let p1r = await promise1
// //     let p2r =  await promise2
// //     let promise3 = p1r + p2r
// //     return promise3;
// //  };
 
// //  /**
// //   * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
// //   *   .then(console.log); // 4
// //   */

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function(arr, size) {
//     let result = []   
//     for(let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size))
//     }
//     return result
// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
};