let str = "hi welcome12345 to the js console";
let longestWord = "";
str = str.split(" ");
for (let word of str) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);
