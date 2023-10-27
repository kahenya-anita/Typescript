//Arrow Func
const add = (a:number, b: number ) =>  a + b
console.log(add(4, 5))

const printOutput = (output: string| number) => console.log(output)

printOutput(add(5, 5))

//Default func parameters
//It should be the last parameter
const add1 = (a:number, b: number = 1 ) =>  a + b
console.log(add1(4))

//Spread Operator
const hobbies = ["hockey", "tennis"]

const myHobbies = ["Hiking"]
myHobbies.push("Eating")
console.log(myHobbies)

myHobbies.push(...hobbies)
console.log(myHobbies)

//OR
const myHobbies2 = ["Hiking", ...hobbies]

const person = {
    firstName: "Anita",
    gender: "Female"
}

const person2 = {...person}
console.log(person2)

//REST Parameter
//Used to accept unlimited number of input parameters
const add3 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}
const addNo = add3(9,0,3,5)
console.log(addNo)

const {firstName: userName, gender} = person
console.log(userName, gender)