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

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
            const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1;
                count++;
                i++;
            }
        }
    }

    return count >= n;
};

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  fn(...args);
   let timer = setInterval(()=> fn(...args),t);

   let cancelFn = () => clearInterval(timer)
   return cancelFn;
};

/**
*  const result = []
*
*  const fn = (x) => x * 2
*  const args = [4], t = 35, cancelT = 190
*
*  const start = performance.now()
*
*  const log = (...argsArr) => {
*      const diff = Math.floor(performance.now() - start)
*      result.push({"time": diff, "returned": fn(...argsArr)})
*  }
*       
*  const cancel = cancellable(log, args, t);
*
*  setTimeout(() => {
*     cancel()
*  }, cancelT)
*   
*  setTimeout(() => {
*    console.log(result)  // [
*                         //      {"time":0,"returned":8},
*                         //      {"time":35,"returned":8},
*                         //      {"time":70,"returned":8},           
*                         //      {"time":105,"returned":8},
*                         //      {"time":140,"returned":8},
*                         //      {"time":175,"returned":8}
*                         //  ]
*  }, cancelT + t + 15)    
*/