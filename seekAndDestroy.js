/**
 *
 * @param {Array<Object>} args array of elements
 * @returns {Array<Object>} modified args
 */
//input seekAndDestroy([1,2,3,4,5,6,6,6,'hello'],2,3,4,6)
//output [1,5,'hello]

function seekAndDestroy(arr, ...rest) {
  return arr.filter((item) => {
    return !rest.includes(item);
  });
}

console.log(seekAndDestroy([1, 2, 3, 4, 5, 6, 6, 6, "hello"], 2, 3, 4, 6));
