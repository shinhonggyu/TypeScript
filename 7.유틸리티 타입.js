var uk = "id";
// interface User {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "f";
// }
var admin = {
    id: 1,
    name: "Bob",
};
var admin1 = {
    id: 1,
    name: "Bob",
    age: 30,
};
var admin3 = {
    id: 1,
    name: "shin",
    age: 31,
};
var admin2 = {
    id: 1,
    name: "Bob",
};
var score = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
};
function isValid(user) {
    var result = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
    };
    return result;
}
var admin5 = {
    id: 0,
    name: "Bob",
};
var admin6 = {
    id: 0,
    name: "Bob",
};
export {};
