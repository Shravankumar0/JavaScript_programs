const accountId = 100101
var accountPassword = "12345"
let accountEmail = "sh@gmail.com"
let accountState

/* 
 prefer not to use var
 becouse of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountState])