var arraySort = require("./array-sort");
var users = [
    {
        id: 7,
        name: "Foo",
        age: "34",
        email: { primary: "foo@email.com" },
    },
    {
        id: 3,
        name: "Baz",
        age: "77",
        email: { primary: "baz@email.com" },
    },
    {
        id: 4,
        name: "Bar",
        age: "67",
        email: { primary: "bar@email.com" },
    },
];

console.log("--------------------------");
console.log("-- before sorting by Id --");
console.log("--------------------------");
console.log(users);
console.log("-------------------------");
console.log("-- after sorting by Id --");
console.log("-------------------------");
const sortedUsers = arraySort(users, "id");
console.log(sortedUsers);
