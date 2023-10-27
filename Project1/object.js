//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
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
