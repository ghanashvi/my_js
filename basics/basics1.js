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
 1. Numbers => 2^53
 2. BigInt
 3. String => "" ``
 4. Boolean => true/false
 5. Null => standalone value / can be assigned as value
 6. UnDefined =>
 7. symbols =>unique 

 // Non primitive
 object
 */
console.log(typeof(accountId)) // tells the type of variable
// undefined is type whereas type of null is object
console.log(typeof undefined) //undefined
console.log(typeof null) //object

/*
// Day 4(datatype conversion)
let score ="33"
console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //33

let sc="33abc"
let valueInN = Number(sc)
console.log(typeof valueInN) //number
console.log(valueInN) //NaN

let scr=null
let valueInNo = Number(scr)
console.log(typeof valueInNo) //number
console.log(valueInN) //0

let scor=undefined
let valueInNum = Number(scor)
console.log(typeof valueInNum) //number
console.log(valueInN) //undefined

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true similar with 0 false
//with empty string false and with string having something true
*/

/*
//Day 5(Operations && conversions)
console.log(2**3) // 2 power 3
let str1 = "raja"
let str2 = " ram"
let str3 =str1+str2
console.log(str3) // raja ram

console.log("1" + 2) //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32 read documentations

console.log(+true) //1
//cosole.log(true+) error

//++num num++

//comparison
console.log("2">1 ) //true js convert "2" to number

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true 

// == ===(checks data type also)

*/