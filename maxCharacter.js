function maxCharacter(str) {
  let charMap = {};
  let maxNum = 0;
  let maxChar = "";
  str
    .trim()
    .toLowerCase()
    .split("")
    .forEach((element) => {
      if (charMap[element]) {
        charMap[element]++;
      } else {
        charMap[element] = 1;
      }
    });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxChar = char;
      maxNum = charMap[char];
    }
  }

  return `"${maxChar}" occurs ${maxNum} times`;
}

console.log(maxCharacter("this STATEMENT has many t's and ttttt"));
