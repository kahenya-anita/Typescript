//A switch statement is a conditional statement
//It is important to add break after every switch case
//As the case will fall through to the one underneath
//Use curly braces for each case
function switchFunction(a) {
  switch (a) {
    case 1: {
      var variableInCase1 = "test";
      console.log(variableInCase1);
      break;
    }
    case 2: {
      var variableInCase2 = "test2";
      console.log(variableInCase2);
      break;
    }
    default:
      console.log("Default");
  }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);


