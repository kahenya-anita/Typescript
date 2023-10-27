//Basic Types
let id: number = 5;

console.log("ID: ", id);

let company: string = "Anita";
let ispublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 5];
let arr: any[] = [1, "me", true];

//Tuple
let person: [number, string, boolean] = [1, "one", false];

//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "Brad"],
  [3, "Brad"],
];

//Union
let pid: string | number = 22; //either number or string

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up); //This will give an index 0

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Up); //This will give Up

//Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

//  OR
type User = {
  id: number;
  name: string;
};

const User2: User = {
  id: 1,
  name: "Anita",
};

//Type Assertion
let cid: any = 1;
let customerId = cid;

//OR
let customerId2 = <number>cid;
customerId2 = 4;

//OR
let customerId3 = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

//Void
function log(message: string | number): void {
  //void return type
  console.log(message);
}

log(1); //Can pass anything except boolean

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  readonly age: number; //Means age cannot be reassigned
}

const User3: UserInterface = {
  id: 1,
  name: "Anita",
  age: 70,
};

//Type works same as interface but
//can be used with primitives and unions
type Point = number | string;
const p1: Point = 1;

//Interface with a function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
const brad = new Person(1, "Brad");
console.log(brad.register()); //Brad is now registered

//Extending classes into other classes
class Employee extends Person {
  position?: string; //Means it's optional

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());

//Generics
//T is a type placeholder
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "kev"]);

//Taking in type any
function getArray2(items: any[]): any[] {
  return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(["brad", "John", "kev"]);

let country = "Finland";
console.log(country.substring(3, 1));
