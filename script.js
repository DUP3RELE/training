/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let p1r = await promise1
    let p2r =  await promise2
    let promise3 = p1r + p2r
    return promise3;
 };
 
 /**
  * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  *   .then(console.log); // 4
  */