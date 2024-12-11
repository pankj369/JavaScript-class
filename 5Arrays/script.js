let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let arr1 = ["Pankj", "Singh"];
console.log(arr1);

let info = ["pankaj", 20, "singh"];
console.log(info);
console.log(info[0]); // array indices
console.log(typeof "pankaj");
console.log(info[2]);

console.log(info.length);
console.log(typeof info);

// looping over an array -print all elements of an array

// for loop
info = ["pankaj", 20, "singh"];

for (let i = 0; i < info.length; i++) {
  console.log(info[i]);
}

// by using for of loop
let fruits = ["mango", "litchi", "apple", "banana", "grapes", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
  // console.log(fruits.toUpperCase());  //not working
}

// practice set of arrays
// Q.1.for a given array with marks of students given below; find the average marks of the students
// 85,97,44,37,76,60

let stu_marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of stu_marks) {
  // console.log(val);
  // sum = sum + val;
  sum += val;
}
// console.log(sum);
let avg = sum/stu_marks.length;

console.log(`Avg marks of the students = ${avg}`);

// 2. for a given array with prices of 5 items -> [250,645,300,900,50] . All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// let offer =0.1;
// for (let item of items) {
//   item = item - item*offer;
//   console.log(item);
// }

// let items = [250, 645, 300, 900, 50];
 
// for(let val of items ){
//  let offer=val/10;
//  val=val-offer;
//  console.log(val);
// }

// using via for of loop
// let items = [250, 645, 300, 900, 50];

// let i =0;
// for(let val of items){
//   let offer = val/10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer =${items[i]}`);
//   i++;
// }
// console.log(items);

// using via for loop

let items = [250, 645, 300, 900, 50];
for (let i=0; i<items.length; i++){ 
  let offer = items[i]/10;
  // items[i] = items[i] - offer;
  items[i] -= offer;
  console.log(`value after offer =${items[i]}`);
}
console.log(items);


// array methods in js 
// push : used to add an element at the end of an array
let veggies =["potato", "tomato", "brinjal"];
veggies.push("carrot");
console.log(veggies);

// pop : used to delete an element from the end of an array and then return 
let flowers=["rose", "lily", "jasmin", "sunflower","mariegold"];
console.log(flowers);
let deletedFlower = flowers.pop();
flowers.pop();
console.log(flowers);
console.log(deletedFlower);

// unshift : used to add an element at the beginning of an array
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);

// shift : used to delete an element from the beginning of an array and then return
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
fruits.shift();
console.log(fruits);

// tostring : used to convert an array into a string
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
console.log(fruits.toString());

// concat : used to merge two or more arrays
let fruits1=["apple", "banana", "grapes", "orange"];
let fruits2=["mango", "pineapple", "jackfruit"];
console.log(fruits.concat(fruits2)); 

// slice : used to extract a part of an array into a new array or returns a piece of the array
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
console.log(fruits.slice(1,4));

// splice : used to add new elements to an array or change original array (add , remove, replace)
// add
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
fruits.splice(1,0,"mango","pineapple");
console.log(fruits);
// remove
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
fruits.splice(1,2,"mango","pineapple");
console.log(fruits);  
// replace
fruits=["apple", "banana", "grapes", "orange"];
console.log(fruits);
fruits.splice(1,1,"mango");
console.log(fruits);

// Q.1. create an array to store companies -> google, microsoft, apple, facebook, amazon
let companies =["google", "microsoft", "apple", "facebook", "amazon"];
console.log(companies);
// remove the first company from the array;
// console.log(companies.splice(0,1));
console.log(companies.shift());
console.log(companies);
// remove the apple and add tesla in its place;
console.log(companies.splice(2,1,"tesla"));
console.log(companies);
// Add Uber and ola at the end of the array
console.log(companies.push("uber","ola"));
console.log(companies);