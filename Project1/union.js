function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAge = combine(5, 9);
console.log(combineAge);
var combineNames = combine("Max", "Ann");
console.log(combineNames);
