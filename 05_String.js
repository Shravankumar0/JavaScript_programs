const name = "kumar"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`hello my nam is ${name} my repocount is ${repoCount}`);

const Gamename =  new String('sharavan');
console.log(Gamename);

console.log(Gamename[3]);

console.log(Gamename.__proto__);

console.log(Gamename.length);

console.log(Gamename.toUpperCase());

console.log(Gamename.charAt(4));
console.log(Gamename.indexOf('r'));

const newString = Gamename.substring(0, 4)
console.log(newString);

const anotherString = Gamename.slice(-7, 4)
console.log(anotherString);


const newStringone ="      shrafark     "
console.log(newStringone);
console.log(newStringone.trim());


const url = "https://shravan.com/raj%23kumar"
console.log(url.replace('%23', '_'));