/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  let timeoutId;

const cancelFn = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
};

const executeFn = () => {
  if (timeoutId) {
    fn(...args);
    timeoutId = null;
  }
};

timeoutId = setTimeout(executeFn, t);

return cancelFn;
};

/**
*  const result = []
*
*  const fn = (x) => x * 5
*  const args = [2], t = 20, cancelT = 50
*
*  const start = performance.now() 
*
*  const log = (...argsArr) => {
*      const diff = Math.floor(performance.now() - start);
*      result.push({"time": diff, "returned": fn(...argsArr)})
*  }
*       
*  const cancel = cancellable(log, args, t);
*
*  const maxT = Math.max(t, cancelT)
*           
*  setTimeout(() => {
*     cancel()
*  }, cancelT)
*
*  setTimeout(() => {
*     console.log(result) // [{"time":20,"returned":10}]
*  }, maxT + 15)
*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const maxCandies = Math.max(...candies)
     const result = candies.map(candy => candy + extraCandies >= maxCandies)
         return result
};