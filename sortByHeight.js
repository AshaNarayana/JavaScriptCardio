//sort array in ascending order without altering position of -1
// input [-1,150,150,234,10,-1,-1, 234,45,-1,34]
//output [-1,20,34,45,-1,-1, 150,150,234,,-1,234]
function sortByHeight(arr) {
  let arrayCopy = [];
  let position = [];
  arr.forEach((element, i) =>
    element === -1 ? position.push(i) : arrayCopy.push(element)
  );
  arrayCopy.sort((a, b) => a - b);
  position.forEach((element, i) => arrayCopy.splice(element, 0, -1));

  //console.log(position, arrayCopy);
  return arrayCopy;
}
console.log(sortByHeight([-1, 150, 150, 234, 10, -1, -1, 234, 45, -1, 34]));
