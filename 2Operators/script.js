// console.log("operators");

// Operators

// 1. Arithmetic Operators
let a = 10;
let b = 2;
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
// or
let c = a+b;
console.log(c);
// Modulus operator
let d= a%b;
console.log("a%b =", d);
// Exponential operator
let e = a**b;
console.log("a**b =", e);
// Increment operator
// a= a+1; or  a++ or 
++a;
console.log("a++ =", a);
// Decrement operator
a= a-1; //or a--;
console.log("a-- =", a);


// 2. Assignment Operators are used to assign values to variables
  let x = 10;
  let y = 20;

  console.log("x =", x);
  console.log("y =", y);
  console.log("x+y =", x+y);
  console.log("x-y =", x-y);
  console.log("x*y =", x*y);
  console.log("x/y =", x/y);
  x += 5;
  console.log("x++ =", x);
  y -= 10;
  console.log("z-- =", y);

  let g = 10;
  let h = 20;
   g*=10;
   console.log("g*=10 =", g);
   h/=10;
   console.log("h/=10 =", h);
   g%=10;
   console.log("g%=10 =", g);
  
   let i = 10;
   i**=2;
   console.log("i**=10 =", i);

  // 3. Comparison Operators
  let j = 3;
  let k = 4;
  console.log("j==k =", j==k);
  console.log("j!=k =", j!=k);
  console.log("j>k =", j>k);
  console.log("j<k =", j<k);
  console.log("j>=k =", j>=k);
  console.log("j<=k =", j<=k);
  j++;
  console.log("j++ =", j);
  console.log("j===k =", j===k);


  // 4. Logical Operators
  let l = true;
  let m = false;
  console.log("l&&m =", l&&m);
  console.log("l||m =", l||m);
  console.log("!l =", !l);
  console.log("!m =", !m);
   
  // 5.Conditinal Operators to implement some condition in the code
  //if statement
  let n = 10;
  let o = 20;
  if(n>o){ 
    console.log("n is greater than o");
  }
  else{
    console.log("n is less than o");
  };

  let age = 20;
  if(age>=18){
    console.log("You can drive");
  }
  else{
    console.log("You can not drive");
  };

 let mode= "dark";
 let color;
 if (mode === "dark") {
   color = "black";
 } else {
   color = "white";
 }
 console.log(color);

//  if-eslse conditional operator

 let umar = 20;
 if(umar>=18){
   console.log("You can VOTE");
 }
 else{
   console.log("You can not vote");
 }  

let num = 4;
if(num%2===0){
  console.log("num is even");
}
else{
  console.log("num is odd");  
}

// else-if conditional operator
let person="Ram";
if(person === "blind"){
  console.log("You should wear glasses");
}
else if(person === "deaf"){
  console.log("You should use hearing aids");
}else {
  console.log("You should not wear glasses or use hearing aids");
}

// if -else ladder
let age1 =95;
if(age1>=8 && age1<18){
  console.log("You can not drive");
} else if(age1>=18 && age1<=70){
  console.log( "You can drive");
}
else if(age1>=71){
  console.log("Ask someone to drive and you sit back");
}
else{
  console.log("Use a bycycle");
}

// Ternary operators is nothing but the another way to write if-else statement 

let age2 =3;
let result = age2>=18 ? "You can drive" : "You can not drive" ;
console.log(result);

let age3 = 20;
age3<=8 && age3>=18  ? console.log( "You should use bicycle") : console.log("You can drive") ;

// Practice  set 1
// Get user to input a number using prompt ("Enter a number"). Check if the number is a multiple of 5 or not.

let number = prompt("Enter the number : ");
if(number%5===0){
console.log("Number is multiple of 5");
}else{
console.log("Number is not multiple of 5");
}

// write a code which can give grades to students according to their scores
// (1.
//   80-100 : A
//   70-89 : B
//   60-69 : C
//   50-59 : D
//   0-49 : F
// )

let score = prompt("Enter the score : ");
let grade;
if (score>=80 && score<=100){
  // console.log("A");
grade = "A";
}
else if(score>=70 && score<=89){
  // console.log("B");
  grade = "B";
}
else if (score>=60 && score<=69){
  // console.log("C");
  grade = "C";
} else if ( score>= 50 && score<=59){
  // console.log("D");
  grade = "D";
}else{
  // console.log("F");
  grade = "F";
}
console.log("According to your score your grade is : ",grade);


