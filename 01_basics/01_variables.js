const  accountId =12334
let accountEmail = "nishant@gmail.com"
var accountPassword = "12345" //wihtout uisng variables u can write its possibilty but its not good
/*
prefer not to use var because of issue in block scope and functional scope
*/
accountCity="jaipur"
let accountState;

// accountId = 2 not allowed
accountEmail = "nishant11@gmail.com"
accountPassword = "1234"
accountCity="delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
