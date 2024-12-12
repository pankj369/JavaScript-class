document.getElementById("header");
console.log(header);

document.getElementById("list");
console.log(list);

let item = document.getElementsByClassName("item");
console.log(item);

let btn = document.getElementsByClassName("btn");
console.log(btn);

let h1 = document.querySelector("h1"); //Baap of all elements
console.log(h1);

let p = document.querySelector("p");  //gives first element
console.log(p);

btn = document.querySelectorAll(".btn"); // returns node list7
console.log(btn);  

document.querySelectorAll("h1");
console.log(h1);

document.querySelectorAll("#list");
console.log(list);

// firstEl.tagname;
// console.log(firstEl.tagname);

let div = document.querySelector("div");
console.dir(div); //dir stands for = directory
// div.innerHTML = "hello"; 
// console.log(div.innerHTML);

let h2 = document.querySelector("h2");  
console.log(h2.innerHTML);
// h2= document.querySelector("h2");
// console.log(h2.innerText);
document.querySelector("div").children
// console.log("div").children;


// Create a H2 heading element with text - "Hellow Js" . Append "from Apna college students"  to this text using js.
h2= document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "Apna College Students";
// console.dir(h2.innerText);