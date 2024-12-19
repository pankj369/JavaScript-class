let displayData = (res) => {
  return res;
};
let sumData = (num1, num2, result) => {
  //here num1,num2, and result are our parameters ,
  return result(num1 + num2);
};
let outPut = sumData(20, 30, displayData); //here displayData replace or overright the result from the parameters of sumData and then out num1,and num2 moves to the paramerter fo displayData that is res
console.log(outPut);

//forEach can be used only when you know about the functions
let l = [20, 34, 54, 65, 76, 79];
l.forEach((v, i) => {
  console.log(v, i);
});

//map method , IN this map method most developers use a seperate function to use map method and most developers use arrow function
//i will always use arrow function
l = [20, 34, 54, 65, 76, 79];
let setResult = (v, i) => {
  return v + 5;
};
//instead of making finalAns function
// i use console
console.log(l.map(setResult));
// let finalAns=l.map(setResult)
// console.log(finalAns)

//filter method by using arrow function
l = [20, 34, 54, 65, 76, 79];
let filterData = l.filter((v, i) => {
  if (v % 2 == 0) {
    return v;
  }
});
console.log(filterData);


//reduce method = it gives a singal value
l = [20, 34, 54, 65, 76, 79];
let reduceData=l.reduce((total,v,i)=>{
  return total+v;
},)
console.log(reduceData)