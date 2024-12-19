//loop takes place three process -- 
// i.initialization
//ii.condition
//iii.arguments like increments and decrement

//for loop
let i=5; 
for(i=1; i<=3; i++){ //increment
  console.log(`here is your loop output: ${i}`)
}

//this is reverse 
for (let n=10; n>=1; n--){//decrement
  console.log(n)
}

//table of 2 and this is how loop works
for(let i=1; i<=10; i++){
  console.log(`2 *`,i, "=", i*2)
}

//break in loop
// for(let i=1; i<=10; i++)
for (let n=10; n>=1; n--){
  if(n==6){
    break;
  }
  console.log("Output: ",n)
}

// continue in loop
for(let n=1;n<=20; n++){
  if(n%2===0){
    continue;
  }
  console.log(n)

}
//Nested for loop 

for(let row=1;row<=2;row++){ //outer loop repeats the inner loop in times  (it generates round that is how much times a work have to do)
  for(let r=1;r<=3;r++){ //and this is criteria kb se kb tak krna hai ( and this generates column)
    console.log(r);
  }
}

//we can also use the nested for loop in reverse pattern
// like

for(let p=5;p>=1;p--){
  for(let n=1;n<=5;n++){
    console.log('nested reverse output: ',p)
  }
}

//Q. how to print 1 ,12,123,1234,12345 line by line
// let gets starts

for (let k=1;k<=5;k++){
  for(let ka=1;ka<=k;ka++){
    console.log("output of 12345", k)
  }
} //not understanding and working also


// while loop

let pan=1; //initialisation takes place here 
while(pan<=10){//condition
  console.log("while loop :",pan)
  pan++; //increment process
}

// do-while loop
let w=1; //inital
do{
  console.log(w,": hi");
  w++; //increment 
} while(w<=10) //then condition