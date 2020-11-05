function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((element) => {
      return element[0].toUpperCase() + element.substr(1);
    })
    .join(" ");
}

console.log(
  capitalizeLetters("change this sentence into Camel case STATEMENT")
);
