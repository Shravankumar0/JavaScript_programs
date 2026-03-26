//objects literals


//symbols
const mysym = Symbol("key1");

const jsusers ={
    name:"sharavab",
    [mysym]:"key1",
    age:12,
    location: "gandhunager",
    email: "shravan@gmail.com",
    isLoggedIn : false

}

// console.log(jsusers.email);
// console.log(jsusers["email"]);
// console.log(jsusers);

// jsusers.email ="shravan@123gmail.com"
// Object.freeze(jsusers) //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 

// jsusers.email="sharavan@123455gmail.com"
// console.log(jsusers);


jsusers.greeting = function(){

    console.log("hello");
    
}

jsusers.greetingTwo = function(){

    console.log(`hello ' ${this.name}`);
    
}


console.log(jsusers.greeting());
console.log(jsusers.greetingTwo());
