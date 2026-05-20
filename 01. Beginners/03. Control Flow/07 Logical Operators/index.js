


// Logical Operators with nested if statements
let age = 12;
let isRegistered = false;

if (isRegistered){
    if (age >= 18){
        console.log("Valid Voter");
    } else {
        console.log("Invalid Voter");
    }
} else{
    if (age >= 18){
        console.log("Registered first");
    }else {
        console.log("Non Voter");
    }
}