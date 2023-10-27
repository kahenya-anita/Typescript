//Return type is infered by input
//But can also be explicitly refed

function add(n1: number, n2: number) {
  return n1 + n2;
}

//Has a return type of void
//Void is when there is no return value
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(7, 9));

//Type Function
//Used to specifically say the type of function we want to use
let combinedValue: Function;

combinedValue = add;

//Callback fn

//An ananymous fn that takes in 2nums as parametres
//Has a callback fn of number type and returns a void result
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(30, 40, (result) => {
  console.log(result);
});

//Type unknown
//Better choice than any
let userInput: unknown;

userInput = 5;
userInput = "Max";

//Type never - It is a newer data type
//This never returns a result value
function genError(message: string, code: number) {
  throw { message: message, errorCode: code };
}
const result = genError("An error occured!", 500);
console.log(result)
