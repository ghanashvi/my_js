"use strict"; //treat all JS code as newer version

// alert(3+3) // error, as we are using nodejs, not browser

//day 1
console.log("Hello")

//day2(variables)
const accountId = 1445 //const -> cannot be changed
// accountId =12 //not allowed

let accountEmail = "raja@gmail.com" //modern practice defines scope
let accountState;
console.log(accountState); //print undefined

var accountPassword = "12345" // avoid using can be redeclare and reinitailize and have global scope
//accountCity = "Bhopal" //variable can be declare in this way also but avoid using this

console.table([accountId, accountEmail, accountPassword]) //console method to print in tabular form

//Day 3(datatype)
//documentation tc39(official) mdn

/*
there are 7 datatype in js
//primitive datatype
 1. numbers => 2^53
 2. bigint
 3. string => "" ``
 4. boolean => true/false
 5. null => standalone value / can be assigned as value
 6. undefined =>
 7. symbols =>unique 

 // Non primitive
 object
 */
console.log(typeof accountId) // tells the type of variable
// undefined is type whereas type of null is object
console.log(typeof undefined) //undefined
console.log(typeof null) //object

// Day 4(datatype conversion)

