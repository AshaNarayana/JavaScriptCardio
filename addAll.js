// function addAll() {
//   return arguments;
// }
//method 1
// function addAll(...numbers) {
//   let total = 0;
//   numbers.forEach((element) => (total += element));
//   return total;
// }

function addAll(...numbers) {
  return numbers.reduce((acc, item) => acc + item);
}

console.log(addAll(1, 2, 3, 4));
console.log(addAll(1, 2));
