function evenOddSum(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((element) =>
    element % 2 === 0
      ? (evenSum = evenSum + element)
      : (oddSum = oddSum + element)
  );
  return [evenSum, oddSum];
}

console.log(evenOddSum([10, 20, 3, 4, 20, 3, 6, 7, 8, 9, 10]));
