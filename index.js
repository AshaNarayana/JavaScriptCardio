let name = {
  firstName: "Asha",
  lastName: "Narayana Swamy",
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
name.printFullName();
let name2 = {
  firstName: "Anbu",
  lastName: "Natarajan",
  middleName: "Nan",
};
//name2.printFullName();
//function borrowing

name.printFullName.call(name2); //here i am binding printFullName "this" method to name2.

//what if we had more parameters in printfullname??

let printFullDetails = function (province, country) {
  console.log(
    `${this.firstName} ${this.lastName} is from ${province}, ${country}`
  );
};

printFullDetails.call(name, "Barcelona", "Spain");

//APPLY
printFullDetails.apply(name2, ["Paris", "France"]);

//BIND --> keep a copy of function which can be invoked later.. using call we invoke method at the moment, with bind it gives copy of method which can be invoked later.

let printUserName = printFullDetails.bind(name2, "Mumbai", "India");

printUserName();
