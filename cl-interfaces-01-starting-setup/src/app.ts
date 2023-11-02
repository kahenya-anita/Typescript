//An interface is used to define structure of an Object
interface Person{
    name: string
    age: number
    
    greet(phrase: string): void
}

let user1: Person

user1 = {
    name: "Max",
    age: 20,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name)
    }
}
user1.greet('Hi there I am')