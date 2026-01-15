const runRules = require("./26-rule-engine-v2");
const ageRule = require("./27-rule-age");
const activeRule = require("./29-rule-active");

const rules = [
    ageRule,
    activeRule,
];

const user1 = {name: "Andi", age: 25, active: true};
const user2 = {name: "Budi", age: 20, active: false};
const user3 = {name: "Cici", age: 16, active: false};

console.log("User 1:", runRules(user1, rules));
console.log("User 2:", runRules(user2, rules));
console.log("User 3:", runRules(user3, rules));