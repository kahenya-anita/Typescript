type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number; //Union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //Intersection type which takes in any types

function add(a: Combinable, b: Combinable){
  if(typeof a === 'string' || typeof b === 'string'){ //Type guard
    return a.toString() + b.toString()
  }
  return a + b
}
console.log(add("5", "6"))

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee){
  console.log('Name: ' + emp.name)
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges)
  }
  if ('startDate' in emp) {
    console.log('StartDate: ' + emp.startDate)
    
  }
}
printEmployeeInformation(e1)

interface Bird{
  type: 'bird'
  flyingSpeed: number
}

interface Horse{
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break;
    case 'horse':
      speed = animal.runningSpeed
      
  }
  console.log('Moving at Speed: ' + speed)
}
moveAnimal({type: 'bird', flyingSpeed: 10})

const userInput = <HTMLInputElement>document.getElementById('user-input')
//OR
const userInputElement = document.getElementById('user-input')! as HTMLInputElement
//This tells typescript "! " that it will never return type null

userInput.value = 'Hi!'

interface ErrorContainer {
  [prop: string]: string
}
const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: "Must start with a capital letter"
}

const fetchedUserData = {
  id: 'u1',
  name: 'max',
  // job: {title: 'CEO', description: 'My own Boss'}
}
console.log(fetchedUserData?.job?.title)