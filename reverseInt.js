function reverseInt(num) {
  let revString = num.toString().split("").reverse().join("");
  return parseInt(revString) * Math.sign(num);
}

console.log(reverseInt(-12345));
