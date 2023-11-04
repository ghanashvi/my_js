"use strict";
//String  in JS
//string interpolation is the process of inserting strings or values into an existing string for various purposes. => `hello ${variable_name}` => using backticks we can do various things in one go
const name="Raja";
const age=21;
console.log(`hello my name is ${name} and my age is ${age}`)

//string declaration using object
const surname = new String("Ram")
console.log(surname)
/*
String Methods
https://www.w3schools.com/js/js_string_methods.asp
*/

//numbers and math
const balance = new Number(100) //specifically cast --> prints [Number: 100]
console.log(balance)
//numbers method
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //precision value 100.00

let num=123.89321
console.log(num.toPrecision(3)) //takes precision but precision starts from left to right till asked value

const hundereds=100000
console.log(hundereds.toLocaleString()) //according to us standard
console.log(hundereds.toLocaleString('en-IN')) //according to Indian standard

//******************* Math ****************
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.3))
console.log(Math.pow(12,2))
console.log(Math.random) //always give value from 0-1

console.log((Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //imp formula

//*************** Dates and Time***********
let myDate = new Date() //typeOf --> object
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

//arbitary date
let myCreatedDate=new Date(2023, 0, 23) //month start from 0 in js
console.log(myCreatedDate.toString()) //Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreated=new Date("01-14-2023")
console.log(myCreated.toLocaleString());

//Time Stamp
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreated.getTime()) //value in milli second

//convert to second
console.log(Math.floor(Date.now()/1000))

//there are different methods to find day month and many more
let newDate=new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// costumize formate(learn more)
newDate.toLocaleString('default',{
    weekday
})







