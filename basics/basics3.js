//**************** Arrays ****************/
//arrays in js is resizable and can have mix element
//declaration
const arr=[0,1,2,3,4]
const arr1=new Array(1,2,3,4)
console.log(arr)

//Shallow copy => shallow copy of an object is a copy whose properties shares the same reference
//Deep copy => deep copy of an object is a copy whose properties does not shares the same reference
// Array follows shallow copy

//Array methods
//1. .push()
arr.push(5)
console.log(arr)

//2. .pop() --> removes last value
//3. .unShift() --> add at the start and all other element gets right shift
//4. .shift() --> removes first element
//5. .includes() --> true/false
//6. .indexOf() --> index/-1

const newArray= arr.join()
console.log(newArray) //bind and convert to string coma seprated

// .slice()->returns the copy of section of an array last one is not inclued ex->arr.slice(1,3)
// .splice() -> original array is manipulated splice section(both range is included) of ele are removed from the array

const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros=["superman", "flash"]
// console.log(marvel_heros.push(dc_heros)) // array 2 is considered a single element

// .concat() --> combine 2 or more array and returns new array

// sprade operator --> every element is a single element
const all_heros=[...marvel_heros, ...dc_heros]
console.log(all_heros)

// array inside array 
// .flat() --> recursively flat whole array in a single array we have to difined the depth or u can take infinity alspo

let array=[1,2,[12,32],[2,[234,45]]]
let array2=array.flat(Infinity)
console.log(array2)

console.log(Array.isArray("Ram")) //check array
console.log(Array.from("Ram")) //convert to array

console.log(Array.from({name: "raja"})) //intr q--> returns empty array y--> we have to define wheter to make array from keys or value

let scr1=12
let scr2=13
let scr3=14

console.log(Array.of(scr1,scr2,scr3));
