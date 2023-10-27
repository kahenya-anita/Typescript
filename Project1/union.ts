//Used when using more than 1data type
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineAge = combine(5, 9);
console.log(combineAge);

const combineNames = combine("Max", "Ann");
console.log(combineNames);
