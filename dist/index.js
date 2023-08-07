"use strict";
//Basic Types
let id = 5;
console.log("ID: ", id);
let company = "Anita";
let ispublished = true;
let x = "Hello";
let ids = [1, 2, 3, 5];
let arr = [1, "me", true];
//Tuple
let person = [1, "one", false];
//Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "Brad"],
    [3, "Brad"],
];
//Union
let pid = 22; //either number or string
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //This will give an index 0
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); //This will give Up
//Objects
const user = {
    id: 1,
    name: "John",
};
const User2 = {
    id: 1,
    name: "Anita",
};
//Type Assertion
let cid = 1;
let customerId = cid;
//OR
let customerId2 = cid;
customerId2 = 4;
//OR
let customerId3 = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(message) {
    //void return type
    console.log(message);
}
log(1); //Can pass anything except boolean
const User3 = {
    id: 1,
    name: "Anita",
    age: 70,
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());
//Generics
//T is a type placeholder
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "kev"]);
//Taking in type any
function getArray2(items) {
    return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(["brad", "John", "kev"]);
