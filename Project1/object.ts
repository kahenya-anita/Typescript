//Enum
enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
  name: "Anita",
  age: 20,
  hobbies: ["hiking", "work outs"],
  role: Role.ADMIN
  // role: [2, "author"], //union type or tuple
};
console.log(person);

// person.role[1] = 10;
// person.role.push("mentor");
console.log(person.role);

//Type: Any
//Ensures that TS does not check type.Avoid it if possible
