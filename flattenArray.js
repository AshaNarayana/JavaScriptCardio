function flattenArray(arrays) {
  //   return arrays.reduce((acc, item) => {
  //     return acc.concat(item);
  //   }, []);

  return [].concat(...arrays);
}

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, [6, 3, 4, 6], 9],
  ])
);
