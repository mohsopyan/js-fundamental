const runRules = require("./26-rule-engine-v2");
const ageRule = require("./27-rule-age");
const activeRule = require("./29-rule-active");
const kycRule = require("./30-rule-kyc");
const amlRule = require("./31-rule-aml");

const rules = [ageRule, activeRule, kycRule, amlRule];

const userA = {
  name: "User A",
  active: true,
  kycVerified: false,
  amlCleared: false,
};

const userB = {
    name: "User B",
    active: true,
    age: 26,
    kycVerified: true,
    amlCleared: false,
}

const userC = {
    name: "User B",
    active: true,
    age: 26,
    kycVerified: true,
    amlCleared: true,
}

const user1 = { name: "Andi", age: 25, active: true, kycVerified: false };
const user2 = { name: "Budi", age: 20, active: false };
const user3 = { name: "Cici", age: 16, active: false };

// console.log("User 1:", runRules(user1, rules));
// console.log("User 2:", runRules(user2, rules));
// console.log("User 3:", runRules(user3, rules, { mode: "FAIL_FAST" }));
console.log("User A:", runRules(userA, rules));
console.log("User B:", runRules(userB, rules));
console.log("User C:", runRules(userC, rules));
