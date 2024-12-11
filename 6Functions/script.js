function myFunction (){ //function define
 //Block of code 
  console.log("This is my function class.");
  console.log("Learning Functions");
}
myFunction(); //function call or invoke function


function myFunction1 (msg){  //parameters = a value that is passed in a function definition is called a parameter
  console.log(msg);
}

// NaN = not a number
myFunction1("Learning Functions 2.0"); //arguments= a value that is passed in a function call is called an argument 

// let create a function that can calcutate the sum of two numbers

function sum (num1, num2){
 s =  num1 +num2;
  console.log(num1+num2);
  // return sum;
}

sum(10,20);


  // Sum function
function sum1(a,b){
  return a+b;
}

// Multiplicaton functions
function multiply(a,b){
  return a*b;
} 

console.log(sum1(10,20));

// Arrow Functions is a compact way of writing a functions.
// It is a part of modern javascript
// sum of arrowFunctions
const arrowSum = (a,b)=>{
  console.log(a+b);
}
arrowSum(5,8);
// Multiplication of arrowFunctions
const arrowMultiply = (x,y) => {
  console.log(x*y);
  // return x*y;
}
arrowMultiply(4,7);


//  this is a arrow function  expression
const print = () => {
  console.log("Hello");
}
print();

// Q.1. Create a funciton using the "function" keyword that takes a string as an arguments and returns the number of vowels in the string.

function countVowels(str){
//using for of loop
let count = 0;
for(const char of str){
  if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    count++;
  }
}
console.log(count);
}
// countVowels("Pankaj Singh");
countVowels("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, autem!");

// Q.2. Create an arrow function to perform the same task.

const countVowels1 = (str1) => {
  let count1 =0;
  for(const char1 of str1){
    if(char1 === "a" || char1 === "e" || char1 === "i" || char1 === "o" || char1 === "u"){
      count1++;
    }
  }
  console.log(count1);  
}

countVowels1("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, autem!");

// foreach loop in arrays

// syntax= arr.forEach(callbackFunction);

let arr = [1,2,3,4,5,6];
arr.forEach(function printVal(val){  //val=value at each index
  console.log(val);

});

let arr1 = ["Pune", "Delhi", "Patna","Sitamarhi","Darbhanga","Begusarai","Muzaffarpur"];
arr1.forEach((val, idx,arr1)=>{ //we can use these params one by one or all together
  // console.log(val, idx, arr1);
console.log(val.toUpperCase(),idx,arr1);

});

// Q. for a given array of numbers, print the square of each value using the forEach loop

let nums = [1,2,3,4,5];
nums.forEach((nums)=> {
  console.log(nums*nums);
})
// another ways to write callbackFunction
let calcSquare = (nums) =>{
  console.log(nums*nums);
}

nums.forEach(calcSquare);



// some more array methods like 
// 1.map

let arr4= [1,2,3,4,5,6,7,8,9,10];
let new_arr = arr4.map((val ) => {
  // return val;
  // return val*val;
  return val*2;
  
})
 console.log(new_arr);

//  2. filter

let arr5 = [1,2,3,4,5,6,7,8,9,10];

let even_arr= arr5.filter((val) => {
  // return val%2 ===0;
  // return val >3 && val<8;
  return val %5 ===0;
})
console.log(even_arr);


// 3.reduce method

const arr6 = [1,2,3,4,5,6,7,8,9,10];
const initialValue = 0;
const sumWithInitial = arr6.reduce((accumulator, currentValue)=> {
  return accumulator + currentValue; 
});
console.log(sumWithInitial);


// Q. we are given array of marks of students. Filters out of the marks of students that score 90.

let marks = [89,78,98,99,44,65,96,78,56,91, 90, 43,66,76,86];

let stu_marks= marks.filter((val)=>{
 return val>90;
})
console.log(stu_marks);

// Take a number n as input from user. Create an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in the array
// use the reduce mehtod to calculate the product of all numbers in the array

let user= prompt("Enter the number : ");
let user_arr =[];
for (let i=1; i<=user; i++){
  user_arr[i-1] = i;
}
console.log(user_arr);

let sum78 = user_arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
// console.log(sum78);


let product=  user_arr.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
})
console.log(product);