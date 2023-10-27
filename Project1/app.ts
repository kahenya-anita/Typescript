
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 === "number" && typeof n2 === "number") {
  // }
  const result = n1+ n2
  if(showResult){
    console.log(phrase + result)
  }else{
    return result;
  }
}

const num1 = 5;
const num2 = 6;
const printResult = true
const resultPhrase = "Result is: "

const result = add(num1, num2, printResult, resultPhrase);
console.log(result);
