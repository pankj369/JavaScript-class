// synchronous sequence
console.log("one");
console.log("Two");

// asynchronous sequence
// function hello(){
// }
setTimeout(() => {
  console.log("hello");
}, 1000); //timeout, 1 seconds == 1000 ms

console.log("Three");
console.log("Four");

// callback

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCalback) {
  sumCalback(a, b);
}
calculator(1, 2, sum); //here sum is a function that passed to another function as an arguments and that is called as callback.
//never callback the function with parenthesis like sum() , if you do it ,your code will not run because it means we are executing the sum function at that place
// we can also execute this like

calculator(1, 2, (a, b) => {
  console.log(a + b);
});
// again asynchronous examples
const code = () => {
  console.log("Hello World!");
};
setTimeout(code, 1000);

// callback hell
//Nested or nesting means ek chij ke andar dusri ,dusri ke under tishri, tishri ke andar forth

// nesting meaning if ke ander he if condition ko likhwana
// nested if else
let age = 14;
if (age >= 18) {
  if (age >= 60) {
    console.log("senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}
// similarly we have nested loop

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     console.log(j);
//     str = str + j;
//   }
//   console.log(i, str);
// }

// now we move towards the callback hell or nesting in callback

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data =", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// this is a callback hell or nexted callback that executed one by one with a 2 sec intervals
getData(1, () => {
  console.log("getting data 2...");
  // getData(2, () => {
  // console.log("getting data 3...");
  // getData(3, () => {
  //   console.log("getting data 4...");
  //   getData(4, () => {
  //     console.log("getting data 5...");
  //   getData(5, () => {
  //     console.log("getting data 6...");
  //     getData(6, () => {
  //       console.log("getting data 7...");
  //       getData(7, () => {
  //         console.log("getting data 8...");
  //         getData(8, () => {
  //           console.log("getting data 9...");
  //           getData(9);
  //         });
  //       });
  //     });
  //   });
  //   });
  // });
  // });
});

// now to solve the promblem of callback hell or nested callback we use promises
let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise.");
});

// we have three state in promises 1.pending 2.fullfilled(resolved) 3.rejects
promise = new Promise((resolve, reject) => {
  console.log("I am a Promise."); //pending
  // resolve("success"); //or fullfilled
  // reject("some error occured");
});

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data :", dataId);
//       // resolve("success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 1000);
//   });
// }

// Now after getting promises how we can use promises , for this  i mean to use the promises we have .then()& .catch()

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    reject("error");
  });
};
promise = getPromise();
promise.then((res) => {
  //use of then
  console.log("Promise fullfilled");
});
promise.catch((err) => {
  //use of catch
  console.log("rejected");
});

// promise chains

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am going to be your promise chains");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching data1")
// let p1 = asyncFunc();
// p1.then((res)=>{
//   console.log(res);
// })

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 6000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success2");
    }, 2000);
  });
}
// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching data2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

//this is how promise chaining
console.log("fetching data1");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("fetching data2");
  asyncFunc2().then((res) => {});
});

// we can replace call back hell with chaining call
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data :", dataId);
      resolve("success");
    }, 5000);
  });
}
// promise chian
getData(1).then((res) => {
  return getData(2);
    })
    .then((res)=>{
      return getData(3);
    })
    .then((res)=>{
      console.log(res);
    });
  
// now instead of console we use return
getData(1).then((res)=>{
  return getData(2);
})
.then((res)=>{
  return getData(3);
})

// Async await
async function hlw(){ // async functions always returns a promise
  console.log("hlw");
}
function api(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Weather Data:");
    resolve(200); //here 200 represents success in website 
  },2000)
})
}
async function getWeatherData (){
  await api();
  await api()
}

function getData(dataId){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Data",dataId);
    resolve("success");
  }, 2000);
})
}
//  async-await
async function getAllData(){
  console.log("fetching data1");
  await getData(1);
  console.log("fetching data2");
  await getData(2);
  console.log("fetching data3");
  await getData(3);
}