const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

//filter those inventors born in 1500's

console.table(
  inventors.filter((inventor) => inventor.year > 1500 && inventor.year < 1600)
);

//array of inventors first and last name and their ages
console.table(
  inventors.map(
    (inventor) =>
      `${inventor.first} ${inventor.last} age is ${
        inventor.passed - inventor.year
      }`
  )
);

//sort oldest to youngest
console.table(inventors.sort((a, b) => a.year - b.year));

//how many years did all the inventors lived

console.log(
  "they lived for ",
  inventors.reduce((acc, item) => {
    return acc + item.passed - item.year;
  }, 0)
);

//sort inventors by years lived

console.table(
  inventors.sort((a, b) => {
    return a.passed - a.year - (b.passed - b.year);
  })
);
