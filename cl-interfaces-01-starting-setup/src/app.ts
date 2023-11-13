//Interface inheritance then extend it
interface Named {
    readonly gender: string
    outPutName?: string //optional property
}

//An interface is used to define structure of an Object
interface Person extends Named{ //extending interface
    name: string
    age: number
    
    greet(phrase: string): void
}

let user1: Person

user1 = {
    name: "Max",
    age: 20,
    gender: "male",
    greet(phrase: string){
        console.log(phrase + ' ' + this.name)
    }
}
user1.greet('Hi there I am')

//Interfaces are used to share functionality between classes
//Interface does not have no implimentation details at all
//Has readonly property
interface Person1{
    readonly name: string
    age: number
    
    greet(phrase: string): void
}