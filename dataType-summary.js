//Primitive data Type 
// 7 types of primitive data types : String ,Number, Boolean,null, undefined , Symbol, BigInt


const score = 123
const scoreValue = 123.22

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const Id = Symbol('12324')
const AnotherId = Symbol('12324')
console.log(Id == AnotherId);

const bigNumber  = 1234456765432334;
console.log(bigNumber);


//Reference (non-primitive )
// Array , Objects, Functions

const heros = ["hanuman", "saktimsn"];
let myobj = {
    name: "sharavan",
    age: 12,
}

console.log(heros);
console.log(myobj);

console.log(typeof heros);
console.log(typeof myobj);

const myFunction = function(){
    console.log("hello world");
}

console.log(myFunction);
