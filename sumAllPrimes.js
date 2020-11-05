function sumAllPrimes(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i, isPrime(i));
      total += i;
    }
    function isPrime(n) {
      for (let j = 2; j < n / 2; j++) {
        if (n % j === 0) return false;
      }
      return true;
    }
  }
  return total;
}

console.log(sumAllPrimes(100));
