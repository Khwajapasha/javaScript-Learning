/*let js = "Amazing";
if (js === "Amazing") alert("javaScript is FUN!");
40 + 10 + 23 - 22;
console.log("result===>", 40 + 10 + 23 - 22);

Values & Variable

let firstName = "Khwaja";
console.log("this is first name===>", firstName);
console.log("this is first name===>", firstName);
console.log("this is first name===>", firstName);

let Khwaja_pasha = "KP";
console.log(Khwaja_pasha);

let job1 = "Marketing";
let job2 = "Programmer";
console.log("my first job--->", job1, "+", "my senond job--->", job2);

Assignment:-->
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

let country = "India";
let continent = "Asia";
let population = 135;
console.log("my country--->", country);
console.log("my continent--->", continent);
console.log("my population--->", population);

// ====== Data types =====
// 1) Primative
// 2) Object

1) Primative:-->

let lastName = "Khwaja"; // String
console.log(typeof lastName);

let age = 28; // Number
console.log(typeof age);

let javaScriptIsFun = true; // Boolean
console.log(typeof javaScriptIsFun);

// Reassining Value to Variable javaScriptIsFun
javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year; // undefined
console.log(typeof year);

let month = null;
console.log("this is null --->", month);

// ====== let, const & var ======

let age = 30;
age = 28;
console.log(age);
// Can re-assign the value
//block scope
//used from ES6

const birthYear = 1992;
// birthYear = 1994; // can not reassign this

console.log(birthYear);
// const job;
// console.log(job);
// immutable:-> cant keep empty

var job = "programmer";
job = "teacher";
console.log(job); // can re-assign the value like let
//old method
//only function scope

lastName = "khwaja";
console.log(lastName);
//no let not const no var
// can called globle scope
// not a good idea*/

// ======Operators in js======

const now = 2021;
const ageKhwaja = now - 1992; // substraction operator
const ageZainab = now - 2019;
console.log(ageKhwaja, ageZainab);

console.log(ageKhwaja * 2, ageKhwaja / 2, 5 ** 3);
//5**3 means 2 to the power of 3 (5*5*5) clalled exponentioal operator

const firstName = "khwaja";
const lastName = "pasha";
console.log(firstName + " " + lastName);
// can used to cancate 2 string

// typeof operator already learned ablove line no 49

let x = 10 + 5; // is equals to15
x += 10; // is equals to ==> x=x+10(x having value 15 and it adding 10 thenn result =25)
x *= 5; // x= x * 5
x -= 5; // x= x-5
console.log(x);
