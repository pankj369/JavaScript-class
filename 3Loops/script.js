// for loop
let num = 5;
for (let i=1;/*initialization*/ i<=5;/*condition*/ i++ /*updation*/) {  
// console.log("pankaj singh", i);
}
console.log("pankaj singh");
// calculate  sum  of first 5 natural numbers
let sum = 0;
for (let i=1; i<=5; i++){
 sum = sum + i;
}
console.log("sum of first 5 natural numbers is : ",sum);
console.log("loop has ended!");


// calculate  sum  of 1 to 6 or n(optional)
let sum1 = 0;
let n=6;
for (let i=1; i<=n; i++){
 sum1 = sum1 + i;
}
console.log("sum1 of first 5 natural numbers is : ",sum1);
console.log("loop has ended!");


// Infinite loop - a loop that never ends
// dont try this at home 


// while loop

let i=1;
while (i<=10){
  console.log("i=", i);
  i++;
}

// do while loop

// let j = 10; in this condition the output will run at least once
let j=1;
do{
  console.log("Hi");
  j++;
} while (j<=5);  


// for-of loop
let name ="Pankaj_Singh";  //string

for (let i of name){  //we can use val instead of i
  console.log(i); 
}

let size =0; // to find the size of the string
for (let val of name){
  size++;
}
console.log("Size of the string is : ",size);



// for-in loop

let students ={
  name: "Pankaj Singh",
  age: 15,
  section: "S",
  rollNo: 12,
  cgpa :8.2,
  isPass: true,
};
for (let key in students){
  // console.log(key);
  console.log("key", key, "value",students[key]);
}

// Practice set 1
// question 1. print all even numbers from 0 to 100;

for (let i=0; i<=100; i++){
  if (i%2===0){
    console.log(i);
  }
} 
// using while loop
//  also try it with for-of loop and so while loop


// 2. create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;

let userNum = prompt("Guess the game number : ");
// console.log(userNum);
while (userNum != gameNum){
  userNum = prompt("You entered the wrong number, Guess again: ");
}
console.log("Congratulation!, You won the game");

