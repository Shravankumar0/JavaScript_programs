//dates 

// let mydate = new Date();
// console.log(mydate);

// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.t)

// let createdate = new Date(2013,2,12);
// let createdate = new Date(2023 , 1,12,2,34) 
// let createdate = new Date("01-2-2023");
// console.log(createdate.toLocaleString());

// let TimeStamp =Date.now()
// console.log(TimeStamp);
// console.log(TimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));


let mydate = Date.now();
console.log(mydate);
// console.log(mydate.getMonth()+1);

mydate.toLocaleString('default',{
    weekday:"long"
})