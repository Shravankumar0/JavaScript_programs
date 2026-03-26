// array

const myarr = [0,1,2,3,4,5,6]

const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr[1]);

// myarr2.push(6)
// myarr2.pop()

// myarr2.unshift(6)
// myarr2.shift()
// console.log(myarr2);

// console.log(myarr.includes(5))
// console.log(myarr.indexOf(5))

// const newarray = myarr.join()
// console.log(newarray);
// console.log(typeof(newarray))
console.log(myarr);
const mya1 = myarr.slice(1,3)
console.log(mya1);
console.log("A",myarr);


const mya2 = myarr.splice(1,3)
console.log(mya2);
console.log("B",myarr); //slice portion is removed and print  


