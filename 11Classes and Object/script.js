const students = {
  fullName: "pankaj",
  class: 9,
  id: "aeiou987",
  printName: function () {
    console.log("name = ", this.fullName);
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10 %");
  },
};

const karanArjun = {
  salary: 45000,
};

const karanArjun2 ={
  salary:89000,
  calcTax(){
    console.log('tax rate is 20%');
  }
};

const karanArjun3={
  salary:78000,
}
karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;

// classes
class ToyotaCar{
  constructor(brand, mileage){
    console.log("Creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start(){
    console.log("start");
  } 
  stop(){
    console.log("stop");
  }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar();



// inheritence in js

class school{
hello(){
  console.log("hello");
}
}

class teachers extends school{

}

let obj = new teachers();

class Person{
  constructor(name){
    this.species = "homo sapiens";
    this.name = name;
  }
  eat(){
    super.eat();
    console.log("eat");
  }
  sleep(){
    console.log("sleep");
  }
  work(){
    console.log("Do nothing");
  }
}

class Engineer extends Person{
  constructor(name){
    super(name); //to invoke parent class constructor
    
  }
  work(){
    console.log("solve problems and build somethings"); //method overwriting
  }
}
let engObj = new Engineer("Pankaj");


// Practice q.1
//  You are creating a website for your college.create a class user with 2 properties, name and email. it also has a method called viewData() that allows user to view website data


 let DATA = "secret info";
class User{
  constructor(name,email){
    this.name =name;
    this.email =email;
  }
  
  viewData(){
    console.log("website data = ", DATA);
  }
}
 class Admin extends User {
  constructor(name, email){
    super(name, email);
  }
  editData(){
    DATA ="some new value";
  }
 }
 
let student1 = new User("Abhishek", "abhishek@email.com");
let student2 = new User("pankaj", "pankaj@email.com"); // we can also add teacher info.. and so many more
let admin1= new Admin("admin", "admin@email.com");

// q.2. Create a new class called admin which inherits from user. Add a new method called editData to admin that allow it to edit website data.
