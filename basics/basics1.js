"use strict"; //treat all JS code as newer version
//day 1
console.log("Hello")

//day2(variables)
const accountId = 1445 //const -> cannot be changed
// accountId =12 //not allowed

let accountEmail = "raja@gmail.com" //modern practice defines scope
let accountState;
console.log(accountState); //print un defined

var accountPassword = "12345" // avoid using can be redeclare and reinitailize and have global scope
accountCity = "Bhopal" //variable can be declare in this way also but avoid using this

console.table([accountId, accountEmail, accountPassword, accountCity]) //console method to print in tabular form



