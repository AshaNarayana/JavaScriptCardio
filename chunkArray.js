function chunkArray(array, size) {
  //Method 1
  //   const chunked_arr = [];
  //   for (let i = 0; i < array.length; i++) {
  //     const last = chunked_arr[chunked_arr.length - 1];

  //     if (!last || last.length === size) {
  //       chunked_arr.push([array[i]]);
  //       console.log("here", chunked_arr);
  //     } else {
  //       last.push(array[i]);
  //       console.log("there", last);
  //     }
  //   }
  //return chunked_arr;

  //Method 2
  //   const chunked_arr = [];
  //   let copied = [...array];
  //   const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
  //   for (let i = 0; i < numOfChild; i++) {
  //     chunked_arr.push(copied.splice(0, size));
  //   }
  //   return chunked_arr;

  //Method 3

  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, index + size));
    index += size;
  }
  return chunked_arr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
