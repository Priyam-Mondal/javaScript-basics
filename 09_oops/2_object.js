// function in JS is also an Object

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
// function is prototypal inheritance of Object
// it will print an empty Object(context)
// it's actually "this" for that function
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

// as function is Object itself, we can inject our own functionality in prototype of this function
createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    console.log(`Score is: ${this.score}`);
    
}

// here not using "new" keyword
// so additional property we added like "increment", "printMe" is added in createUser function
// but Object u1 and u2 are unaware of it
// so printing u1.printMe() will give error

// const u1 = createUser("John", 25);
// const u2 = createUser("Wick", 20);
// console.log(u1.printMe());   // TypeError: Cannot read properties of undefined (reading 'printMe')  

// using "new" keyword, so no error
const u1 = new createUser("John", 25);
const u2 = new createUser("Wick", 20);
console.log(u1.printMe());




/*

Here's what happens behind the scenes when the "new" keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/