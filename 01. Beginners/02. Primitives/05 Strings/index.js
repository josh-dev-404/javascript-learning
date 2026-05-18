// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

// 1. Create variable name (favActorFirstName)
let favActorFirstName = "Vic";
// 2. Create variable name (favActorLastName)
let favActorLastName = "Sotto"; 
// 3. Create variable name (fullName) & concatenate
let fullName = favActorFirstName + " " + favActorLastName;
// 4. Create variable name (uppercase) & CAPITALIZE
let uppercase = fullName.toUpperCase();
// 5. Create a variable name (message) & store the template
let message = `My favorite Actor Is ${uppercase} and he is a legendary Filipino comedian.`;
// 6. Now append this message to the (message variable) `He is also a great actor and a TV host.`.
message += " He is also a great actor and a TV host.";
// 7. Log the message variable
console.log(message);
