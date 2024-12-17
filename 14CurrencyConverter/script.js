const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

const dropdowns=document.querySelector(".dropdown select");


for(let select of dropdowns){
  for (currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value =currCode;
    if(select.name==="from" && currCode==="USD"){
      newOption.selected ="selected";
    }else if(select.name==="to" && currCode==="from"){
      newOption.selected ="selected";
    }
    select.append(newOption);
  }
select.addEventListener("change", (evt)=>{
  updateFlag(evt.target);
})
}

const updateFlag = (element) =>{
  let currCode = element.value;
  let countryCode = countryList(currCode);
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img= element.parentElement.querySelector("img");
};