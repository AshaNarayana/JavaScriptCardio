function longestWord(sen) {
  //sort the sentence
  const sorted = sen
    .toLowerCase()
    .split(" ")
    .sort((a, b) => {
      return b.length - a.length;
    });

  //if more than one word
  const longestWordArr = sorted.filter((element) => {
    return element.length === sorted[0].length;
  });

  // if just one word return word and not array

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else return longestWordArr;
}

console.log(
  longestWord("find which has longest word in this sentences 'testing'")
);
