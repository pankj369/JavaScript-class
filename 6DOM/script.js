//search and button code
let password = document.getElementById("pass");
let btn = document.getElementById("btn");
function showHidePassword() {
  if (btn.innerHTML == "show") {
    password.type = "text";
    btn.innerHTML = "hide";
  } else {
    password.type = "password";
    btn.innerHTML = "show";
  }
}
//calculator just for add two numbers
let btn1 = document.querySelector(".btn1");
let allInput = document.querySelectorAll(".input");
btn1.addEventListener("click", () => {
  let input1Value = Number(allInput[0].value);
  let input2Value = Number(allInput[1].value);

  let outPut = input1Value + input2Value;
  allInput[2].value = outPut;
  allInput[0].value = "";
  allInput[1].value = "";
});

//div container example
let btn2 = document.querySelector(".btn2");
let allBoxes = document.querySelectorAll(".main");

btn2.addEventListener("click", function () {
  for (let items of allBoxes) {
    items.style.backgroundColor = "yellow";
    items.style.fontSize = "50px";
  }
});
