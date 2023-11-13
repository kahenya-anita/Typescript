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