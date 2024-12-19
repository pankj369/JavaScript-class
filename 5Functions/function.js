// normal function
function displayName() {}
displayName(console.log("welcome to functions"));

// function with parameters

function addData(num1, num2) {
  console.log(num1 + num2);
}
addData(23, 43543);

// other way
let a = 23;
let b = 34;
function total(a, b) {
  // console.log(b-a);
}
total(console.log(a + b));

// return type function ==in this work will done but do not print data, so to print data we use console or variables to print data like this console.log(a+b) or let output=num1+num2;

function addData1(num1, num2) {
  return num1 + num2;
}
addData1();

//Arrow function= it is used in modern js , it is easy to use
let a1 = 5;
let b1 = 5;
let user = (a1, b1) => {
  //we must use curly braces if we have to work on multiple line of code and if we have to work on a single line of code ,we can use return without curly braces
  return a1 + b1;
};
user(console.log(a1 + b1));

//difference btw normal and arrow function
let obj = {
  name: "pankj",
  roll: 234,
  Id: "pan111",
  info: () => {
    console.log(this); //this represents window function in arrow key words and in normal functions  it represents  the object in which  'this' is used.
  },
};
obj.info();