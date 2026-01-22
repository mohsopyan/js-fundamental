const runRules = require("./26-rule-engine-v2");
const ageRule = require("./27-rule-age");
const activeRule = require("./29-rule-active");
const kycRule = require("./30-rule-kyc");
const withdrawRule = require("./31-rule-withdraw");

const rules = [
    ageRule,
    activeRule,
    kycRule,
    withdrawRule,
];

const user1 = {name: "Andi", age: 25, active: true, kycVerified: false};
const user2 = {name: "Budi", age: 20, active: false};
const user3 = {name: "Cici", age: 16, active: false};

console.log("User 1:", runRules(user1, rules));
console.log("User 2:", runRules(user2, rules));
console.log("User 3:", runRules(user3, rules, {mode: "FAIL_FAST"}));