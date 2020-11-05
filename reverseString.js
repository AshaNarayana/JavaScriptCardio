function reverseString(str) {
  /* With reverse function 
  return str.split("").reverse().join("");  
  */
  ////////////////////

  /* With old school for loop method 

  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;

  */

  /////// Using For each loop//////////
  //   let revString = "";
  //   str.split("").forEach((element) => {
  //     revString = element + revString;
  //   });
  //   return revString;
  // }

  //////Reduce ///

  return str.split("").reduce((revString, char) => {
    return char + revString;
  }, "");
}

const output = reverseString("hello");
console.log("reverse string of hello ", output);
