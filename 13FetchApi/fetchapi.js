// const { response } = require("express");

const { response } = require("express");

const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#btn");
const btn = querySelector("#btn");

// const getFacts = async () => {
//   console.log("Getting data ....");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// };

function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[2].text;
    });
}
btn.addEvenListener("click", getFacts);
