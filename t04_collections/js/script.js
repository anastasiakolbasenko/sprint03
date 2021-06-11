const guests = new Set();
guests.add('Kimi');
guests.add('Daniel');
guests.add('Lewis');
guests.add('Max');
console.log(guests);
for (let value of guests)
    console.log(` ${value}`);
guests.delete("seafood pasta");
console.log(guests.has("seafood pasta"));
console.log(guests.size);
guests.clear();
console.log(guests);



    console.log(".....................................................................................................................................................................")
const menu = new Map();
menu.set('seabass with vegetables','3,5 ‎€')
.set('mushroom risotto','2,5 ‎€')
.set('seafood pasta','3 ‎€')
.set('roastbeef with potato crumbles','2 ‎€');
console.log(menu);
for (let[key,value] of menu)
    console.log(`${key} - ${value}`);
menu.delete("seafood pasta");
console.log(menu.has("seafood pasta"));
console.log(menu.size);
menu.clear();
console.log(menu);

console.log(".....................................................................................................................................................................")

const bank = new WeakMap();
let person1 = {},
person2 = {};
bank.set(person1, "account1")
.set(person2, "account2")
console.log(bank)
console.log(bank.has(person2));
console.log(bank.get(person2));
bank.delete(person2);
console.log(bank)
console.log(".....................................................................................................................................................................")





let coinCollection = new WeakSet();
let obj = {
    "coin": "content"
}
let obj1 = {
    "coin1": "content"
}
let obj2 = {
    "coin2": "content"
}
coinCollection.add(obj).add(obj1).add(obj2);
console.log(coinCollection);
console.log(coinCollection.has(obj1));
coinCollection.delete(obj2);
console.log(coinCollection);

