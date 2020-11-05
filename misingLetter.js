function missingLetter(str) {
  let initVal = str.charCodeAt(0);
  //let initVal = 97;
  let missing;
  str.split("").map((e, i) => {
    if (str.charCodeAt(i) === initVal) {
      ++initVal;
    } else {
      missing = String.fromCharCode(initVal);
    }
  });
  return missing;
}

console.log(missingLetter("bcdfgh"));
console.log(missingLetter("abdefgh"));
console.log(missingLetter("abcdefghj"));
