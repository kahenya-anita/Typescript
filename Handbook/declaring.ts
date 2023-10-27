//Use let and const 
//You can use declare before let and const
//This is called ambient declaration
//Which is used to declare something that eg 
//has been imported from JS

// declare let myVar: number;
// let myNewVar = myVar + 10

//Declaring String
//1. String Interpolation

let word = "Yes"
let x = `Am I an interpolated string ${word}`
console.log(x)

//Multi Line Strings
//The JS WAY
let multiLine1 = "Line1\n " + "Line2\n" + "Line3\n"

//The TS WAY
let multiLine2 = `Line1
Line2
Line3`

function getPrice(): number{
    return 100
}
let description = `The book is about ${2+8} chapters and cost ${getPrice()}$`
console.log(description)

const number = 85
const number3 = 100
const enResult = `The number is ${number} and the second is ${number3}`
console.log(enResult)
