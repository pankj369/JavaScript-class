// alert("this is the first js class ."); 
console.log("this is our first js code to learn javascritp.");

// variables
radius= 23; // this is equal to means assigned value 
// fullName = "Tony Stark";
// console.log(fullName);
x= null;  // null means know the exaclty value of the variable 
console.log(x);
y= undefined;
console.log(y); // undefined means there is no value in the variable
isFollow = false;
console.log('isFollow');
// means negative or iska mtlab ki hum  usko follow nhi krte hai aur agar true value rehta to uska mtlab positive;


// var = variable can br re-declared & updated. A global scope variabl. (var is used before 2015 when ES6 was introduced in JS and after that let is used instead of var variable )
var age = 24;
var age = 25;
console.log(age);  

//  now or after 2015, we always use 'let' to  declare variables or aage v hum  humesa ya to let use krenge ya const use krenge variables ko declare krne keiye
let fullname = "Tony Stark";
// let age=23;
let totalPrice = 100;
let isLogin = true;

console.log(fullname);

{ //this is a block {}
  let a =5;
  console.log(a);
}

{
  let b = 10;
  console.log(b); 
}
//  we have seven primitive data types in js
let price = 100;  //number datatype
console.log(price);

let fullName = "Tony Stark"; //string datatype
console.log(fullName);

 isFollow = true; //boolean datatype
console.log(isFollow);

let a; //undefined datatype
console.log(a);

let b = null;  //Null datatypes
console.log(b);

let c =123n; //BigInt datatype
console.log(c);
let d= BigInt('123');
console.log(d);

let s = Symbol("hello!"); //symbol datatype
console.log(s);

// object datatype -> an object is a collection of key-value pairs

let obj = {
  name: "Tony Stark",
  age: 23,
  isFollow: true, 
};
console.log(obj);
console.log(obj["name"]);
console.log(obj.age);
console.log(obj.name);
console.log(obj.isFollow);

// how to increase age of the person
obj.age = obj.age + 1;
console.log(obj.age);
// how to change name of the person
obj.name = "Iron Man";
console.log(obj.name);


// Practice set 1
const product = {
  productName :"BallPen",
  rating : 4.5,
  discountDeal: 25,
  isFreeDelivery : true,
  price:270,
};
console.log(product);
console.log(typeof(product));
console.log(product.discountDeal);
console.log(typeof (product.discountDeal));


product.rating =4; //change rating
console.log(product.rating);

// Practice set 2
const instaId ={
user_name:"@shradhakhapra",
isVerified: true,
isFollow: false,
posts: 195,
followers: "569k",
following:4,
bio:"Hello I am Shradha Khapra",
proffesion:"Enterpreneur",
};
console.log(instaId);
console.log(typeof(instaId));
console.log(typeof(instaId.posts));
console.log(typeof(instaId.followers));
console.log(instaId.proffesion);

instaId.isFollow = true; //change isFollow false to true
console.log(instaId.isFollow);