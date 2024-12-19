let arr = [1, 2, 3, 4, 5];
console.log(arr);

// another method of making an array
let arr1 = Array("hello", "js", 234, 45, "how are you", 32, "fine");
console.log(arr1[4]);

// multidimensioanl array= an array inside an array like this

let ml = [23, 45, 65, 76, 23, 54, 67, [34, 56, 67, 8, 9, 1, 0, 323]]; //multi-dimensioal array
console.log(ml); //array list
console.log(ml[3]); //access of 1 array list
console.log(ml[7][1]); //access an array items from an array

let n = [10, 23, 345, 54, 65];
console.log(n[2]); //this is how  we can aceess array data individually

//now to access all data of an array or access an array
// we use loop
let n1 = [10, 23, 345, 54, 65];
let m = n1.length;
for (let i = 0; i < m; i++) {
  console.log(i, n1[i]); // this is how we an array by using for loop
}
//in reverse
n1 = [10, 23, 345, 54, 65];
m = n1.length;
for (let i = m; i >= 0; i--) {
  console.log(i, n1[i]); // this is how we an array by using for loop
}

//for of = returns members value of an array and for of is only use in array (currly bracket wale me kaam nhi krta hai )
let p = [10, 23, 4, 32, 345, 65];

for (let v of p) {
  console.log("use of for of", v);
}

// for in= returns array/object index numbers like 0,1,2,3,4,5

for (let w in p) {
  console.log("use of for in", w, p[w]);
}

// forEach loop

// array methods
let l = [10, 20, 30, 40];
console.log(l);
l.push(99); //add value from last
console.log(l);
l.unshift(23); //add value form beginning
console.log(l);

//  l.pop() this will not show the answer that what is deleted and only show output  // and this method delete the number from last
console.log(l.pop()); //this method shows what was deleted

l.shift(); //this will delete number from starting
// console.log(l)
console.log(l.pop());

// how to use string
let names = ["ram", "ravi", "krishna", "shiv", "vishnu"];
console.log(names);
let name_data = names.toString();
console.log(name_data);
// Join
let join = names.join("_");
console.log(join);
// include
console.log(l.includes(20));
console.log(names.includes("ravi"));
console.log(names.includes("pankaj"));
//concate
let concate = n1.concat(l);
console.log(concate);
//myway
let new_names = ["hanuman", "bajrangi", "sudama", "pankaj", "Duniya"];
let all_names = `All names :${names}, ${new_names}`;
console.log(all_names);

// splice is used to add or delete elements
names = ["ram", "ravi", "krishna", "shiv", "vishnu"];
names.splice(0, 2);
console.log(names);
names.splice(2, 1);
console.log(names);
names.splice(1, 0, "ram", "vishnu", "ravi"); //add in 1 place
console.log(names);

//slice == gives the only data that it takes as an arguments or conditions like 0,2 it will give the data from 0 to 2
new_names = ["hanuman", "bajrangi", "sudama", "pankaj", "Duniya"];
new_names.slice(0,2);
console.log(new_names);

//flat is used to merge the all elements in a singal array
let num1=[23,657,87,90,[345,1,234,45],6764,[3,45,56,67,],76,345,65,]
num1.flat()
console.log(num1)

// array element can be updated using index number of array like this:-
p = [10, 23, 4, 32, 345, 65];
p[2]=43
console.log(p)