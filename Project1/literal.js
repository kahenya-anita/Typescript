//Used when using more than 1data type
function combine2(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    return result.toString();
}
var combineNAge = combine2(5, 9, "as-number");
console.log(combineNAge);
var combineStringNames = combine2("Max", "Ann", "as-number");
console.log(combineStringNames);
