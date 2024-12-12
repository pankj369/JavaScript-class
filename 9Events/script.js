// Event handling in js
let button = document.querySelector("button");

button.onclick=()=>{
  console.log("Thank you user for clicking me...");
};

let box = document.querySelector("div");
box.onclick=(evt)=>{
console.log("You are inside a div");
}
// event object
let div= document.querySelector("div");

div.onmouseover=(evt)=>{
  console.log("thank u for hovering on me...");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
}

// event listeners
 //add eventListeners
div.addEventListener("click",()=>{
console.log("box was clicked!");
})
button.addEventListener("click", (evt) =>{
console.log("Button was clicked!");
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX, evt.clientY);
})

// removeEventListeners

button.removeEventListener("click",div); // learn again

// Q. Create a toggle button that changes the screen to dar-mode whn clicked  &  light-mode when clicked again.

let toogle = document.querySelector("#btn");
let body = document.querySelector("body");
let current_mode= "light";
toogle.addEventListener("click", ()=>{
 if(current_mode==="light"){
  current_mode="dark";
  body.classList.add("dark");
  body.classList.remove("light");
 } else{
  current_mode="light";
  body.classList.add("light");
  body.classList.remove("dark");
 }
console.log(current_mode);
});