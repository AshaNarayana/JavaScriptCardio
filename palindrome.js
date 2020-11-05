function isPalindrome(str) {
  let revString = str.split("").reverse().join("");
  return str === revString;
}

console.log(isPalindrome("malayalam"));
