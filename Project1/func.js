//Return type is infered by input
//But can also be explicitly refed
function add(n1, n2) {
    return n1 + n2;
}
//Has a return type of void
//Void is when there is no return value
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(7, 9));
//Type Function
//Used to specifically say the type of function we want to use
var combinedValue;
combinedValue = add;
//Callback fn
//An ananymous fn that takes in 2nums as parametres
//Has a callback fn of number type and returns a void result
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(30, 40, function (result) {
    console.log(result);
});
//Type unknown
//Better choice than any
var userInput;
userInput = 5;
userInput = "Max";
//Type never - It is a newer data type
//This never returns a result value
function genError(message, code) {
    throw { message: message, errorCode: code };
}
var result = genError("An error occured!", 500);
console.log(result);
