function mathSequence(arr) {
  let arith = new Set();
  let geo = new Set();
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    arith.add(diff);

    let remainder = arr[i] / arr[i - 1];
    geo.add(remainder);
  }
  if (arith.size === 1) {
    return "arith";
  }
  if (geo.size === 1) {
    return "geo";
  }
  return "others";
}

console.log("Sequence is :", mathSequence([2, 4, 6, 8, 10]));
console.log("Sequence is :", mathSequence([3, 9, 27]));
