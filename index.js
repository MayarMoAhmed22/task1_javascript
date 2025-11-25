// Part 1
// question 1
let x = "123";
let y = Number("123");
let z = y + 7;
// console.log(z);   //output : 130

// question 2
function checkFalsy(n) {
  if (n === "" || n === undefined || n === null || n === 0 || n === false) {
    return "INVALID";
  } else {
    return "valid";
  }
}
let val = checkFalsy("lolo");
// console.log(val);

// question 3
let num = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  num += i;
}
// console.log(num);    // 1,3,5,7,9

// question 4

let n = [1, 2, 3, 4, 5];
const res = n.filter((e) => e % 2 === 0);
// console.log(res);     //[2,4]

// question 5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
// console.log(result);   //[1,2,3,4,5,6]

// question 6
function dayName(k) {
  switch (k) {
    case 1:
      return "Sunday";

    case 2:
      return "Monday";

    case 3:
      return "tuesday";

    case 4:
      return "wednesday";

    case 5:
      return "thursday";

    case 6:
      return "friday";

    case 7:
      return "Saturday";

    default:
      return "NOT A DAY";
  }
}
let res1 = dayName(1);
// console.log(res1); // Sunday

// question 7

let l = ["a", "ab", "abc"];
let resu = l.map((e) => e.length);
// console.log(resu);  //[1,2,3]

//question 8

function diviNum(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "divisible by both";
  } else if (n % 3 === 0) {
    return "divisible by 3";
  } else if (n % 5 === 0) {
    return "divisible by 5";
  } else {
    return "Not divisible by 3 or 5 or both";
  }
}
let resul = diviNum(15);
// console.log(resul);     //divisible by both

// question 9

let squareNum = (n) => Math.pow(n, 2);
let reso = squareNum(5);
// console.log(reso);  //25

//question 10

function destPer(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}
const person = { name: "mayar", age: 24 };
const re = destPer(person);
// console.log(re);  //mayar is 24 years old

// question 11

function sumNum(...m) {
  let sum = 0;
  for (let i = 0; i <= m.length; i++) {
    sum += i;
  }
  return sum;
}
const r = sumNum(1, 2, 3, 4, 5, 6, 7);
// console.log(r);  //28

// question 12
function promiseCheck() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve('"success"');
    }, 3000);
  });
}
// promiseCheck().then((msg)=>console.log(msg));

//question 13

function maxNum(max) {
  return Math.max(...max);
}
let maxo = [1, 3, 7, 2, 4];
let reo = maxNum(maxo);
// console.log(reo); // 7

// another solution

function findMax(array) {
  let indexofmax = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > indexofmax) {
      indexofmax = i;
    }
  }
  return array[indexofmax];
}
let maxi = [1, 3, 7, 2, 4];
let j = maxNum(maxi);
// console.log(j);

//question 14

function keyObj(obj) {
  let w = Object.keys(obj);
  return w;
}

const ob = { name: "mayar", age: 24 };
const h = keyObj(person);
// console.log(h);

// question 15
function spNum(n) {
  return n.split(" ");
}
let q = "The quick brown fox";
// console.log(spNum(q));



// B Part 2 

/*
  //question 1

  forEach---> used to loop through array but it uses a callback function inside it which represent each element in the array and it's index
   example or syntax ---> arr.forEach(function (element , index)=>{
    console.log(element)
    })

  for---of--> used to iterate through array or object or collection of element not index but if you want it's index you can use for---in instead  


 //question 2

 temporal dead zone----> it's a block where variable is dont accessed until it  initializes with value 

 example that works with let,const
 {
 //the start of tdz 
 console.log(test)  ///this will cause a referance error
 let test = "hi";  //this ends of tdz
console.log(test) //
 
 }
 but this not work with var 
 {//tdz starts and ends
 console.log(test) //this will be undefined
 var test = "hi" //tdz doesnt exit
 console.log(test )  //
 
 }

hoisting ---> make declaration before any other executon
{
                      
                                    
let funTest = function(){
console.log(test)
let test = "welcome"
}                                              }
funTest()     //this will be reference error

}    //here  test hoist to top of funTest function and enter tdz area once the log tried to access the test before initialization it cause referanceerror


// question 3 
== (loose equality)----> it's only compare the value
example 5 == "5" ==> true

===(strict equality ) -----> it's compare the value and data type
example 5 == "5" ==> false

//question 4

بنجرب الكود لو حصل اى مشكلة بستقبله فى catch فى اى parameter
                 wa mash bay7sl crash fy server wa ba2et haga bate4t8l
example 

try{
let x = 20;
console.log(x) 
}catch(habozo){
alert(habozo);
}


 //question 5

 conversion ----->it's manually done can convert datatype from another 
 like string(1234) ---> from number to string 
 
 and coercion -----> it's automatically done converts datatype to another
 like let n = 5
 let s = "5"          let k = n+s --> 55  --> converted to string

*/