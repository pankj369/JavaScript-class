


// if else condition statement
// here if is used for true condition and else is used for false condition
//I mean if if ===true returns the if console and if if ===false or else ===true returns else console.
let discount=67;
if (discount>50){
  console.log("Discount granted");
} else {
  console.log("Discount dinied");
}
// a number divisible by two

let num=3;
if (num%2===0){
  console.log(`The given number ${num} is divisible by two and it's an even number.` );
} else{
  console.log(`The given number ${num} is not divisible by two, and it is an odd number.`);
}

// if else if  statement
 let marks=45;

 if (marks>=60){
  console.log("1st Div")
 }else if (marks>=48){
  console.log("2nd Div")
 } else if(marks>=28){
  console.log("3rd Div")
 } else{
  console.log("Fail!")
 }


//  switch case

let choice=3;

switch(choice){
  case 1:
    console.log("RED");
    break
    case 2:
      console.log("YELLOW")
      break
      case 3:
        console.log("GREEN")
        break
        default:
          console.log("Invalid ")
          break //here break is not neccessary but optional
}

//  for traffic light 
// we can also use the conditional operators in this switch case statement
let userCh='GREEN';

switch(userCh){
  case 'RED':
    console.log("Stop! The light is RED")
    break
    case 'YELLOW':
      console.log("Wait! The light is YELLOW")
      break
      case "GREEN":
        console.log("GO! The light is Green")
        break
        default :
          console.log("Invalid prompt!")

}

// calculator code

let calc1=34;
let calc2=32;
// let opr=prompt("Enter the opt(+,-,*,/):---")

switch (opr){
  case "+":
    console.log(calc1+calc2)
    break
    case '-':
      console.log(calc1-calc2)
      break
      case '*':
        console.log(calc1*calc2)
        break
        case '/':
          console.log(calc1/calc2)
          break
          default:
            console.log("Invalid")
            break;
}

