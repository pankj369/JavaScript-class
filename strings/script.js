
    // string
    let str = "Pankaj Singh";
    console.log(str);
    console.log(str.length); // str.length
    console.log(str[0]);  //str.Indices
    
    let str2 = 'Pankaj__Singh';
    console.log(str2);
    console.log(str2.length); // str.length
    console.log(str2[7]);  //str.Indices
    console.log(str2[8]);  //str.Indices
    
// Template literal
    let str3 = `Pankaj Singh`; // backtick used in this template lateral 
    console.log(str3);
    console.log(typeof str3);


//  why we use Template literals (or so called backticks) as we have already single and double quotes 
//  we do this beacause it is easier to use the variables in the template literals and we can use it in the string
// temperal literals is a way to use the variables in the string or 
//  a way to have embedded expressions in the string

  //examples

   let obj ={
    item : "pen",
    price: 20,
    discount: 20,
   }
   console.log(obj);
   console.log("The cost of",obj.item,'is' ,obj.price, 'rupees.'); 
  //  or
  console.log(`The cost of ${obj.item} is ${obj.price} rupees.`);  // this is the use of template literals
   console.log(typeof obj);

  // console.log (`The sum of the first 3 natural numbers is ${1+2+3}.`);

  // escape character is used for special characters in the string or used of next line in the string like this \n
  console.log("Pankaj \nSingh");  

  // string methods also called string functions :- these are build-in functions which are used to perform operations  on the string or to manipulate the string 

  let str4 = "Pankaj Singh            ";
  console.log(str4);
  console.log(str4.toUpperCase()); // str4.toUpperCase
  console.log(str4.toLowerCase()); // str4.toLowerCase
  console.log(str4.trim("         Hello    pankaj singh        ")); // str4.trim used to remove whitespaces

  let str5 = "Pankaj Singh";
  console.log(str5);
  console.log(str5.slice(1)); //exclude the 1 alphanet and print the rest of the string
  console.log(str5.slice(0,6)); // str5.slice(start, end)  6th place character is not included
  // another example 
  console.log(str5.slice(2,5)); //here two number and 5 number is not included only print the digit or numbers btwn the given number like nka
  console.log(str5.concat(" is a good boy")); // str5.concat(str2)

  // another example of concat
  let str6 = "Pankaj Singh";
  let str7 = " is a good boy";
  console.log(str6.concat(str7)); // str6.concat(str7)
  console.log(str6 + str7); // str6.concat(str7)

//  let str8 = "bad";

 console.log(str6+str7.replace("good","bad")); // str8.replace(searchVal,newVal)



//  practice set of strings

// Q.1. Prompt the user to enter their full name.Generate a username for them based on the input. start username with @,followed by their full name and ending with the fullname length.
// eg. username = "sharadhakhapra" , username shouldbe @sharadhakhapra12


// lets start;

 let userName = prompt("Enter your full name without space : ");
 console.log(userName);
 let new_username ="@" + userName + userName.length;
