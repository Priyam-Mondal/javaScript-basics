// object literal
const user = {
    username: "Priyam",
    loginCount: 10,
    signedIn: true,

    // using arrow function won't work
    // Arrow functions do not have their own this. Instead, they inherit this from the outer lexical environment. 
    // In this case, the outer environment is the global scope (or module scope if you’re using a module). 
    // Therefore, this inside the arrow function does not refer to the user object, but instead refers to the global this, 
    // which in Node.js is undefined in modules, and in browsers, it's the window object.

    // getUserDetails: () => {
    //     console.log("got user details from DB");
    //     console.log(`username: ${this.username}`);        
    // }

    getUserDetails: function() {
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
};

// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // it will return by-default
    // using "return this" is optional

    // return this;
}

// here we are not displaying user2
// but if you run this code, it will display user2
// because we didn't use new keyword while creating new context
// so user1 got overwritten by user2

// const user1 = User("Priyam", 12, true);
// const user2 = User("John Wick", 11, false);
// console.log(user1);

// using "new" keyword to create new context each time
const user1 = new User("Priyam", 12, true);
const user2 = new User("John Wick", 11, false);
// console.log(user1);