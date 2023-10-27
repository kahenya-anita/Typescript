//
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 === "number" && typeof n2 === "number") {
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 6;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(num1, num2, printResult, resultPhrase);
console.log(result);
